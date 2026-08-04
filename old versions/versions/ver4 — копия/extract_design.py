import json
import sys

json_path = r"C:\Users\Сократ\Documents\GitHub\FMF_landing\versions\ver4 — копия\figma_nodes.json"

try:
    with open(json_path, 'r', encoding='utf-8') as f:
        data = json.load(f)
except Exception as e:
    print(f"Error loading JSON: {e}")
    sys.exit(1)

nodes = data.get('nodes', {})
canvas_id = list(nodes.keys())[0] if nodes else None
if not canvas_id:
    print("No nodes found.")
    sys.exit(1)

canvas = nodes[canvas_id].get('document')
if not canvas:
    print("No document.")
    sys.exit(1)

def find_frame(node, target):
    if isinstance(node, dict):
        if node.get('type') == 'FRAME' and node.get('name') == target:
            return node
        for k, v in node.items():
            if isinstance(v, (dict, list)):
                res = find_frame(v, target)
                if res:
                    return res
    elif isinstance(node, list):
        for item in node:
            res = find_frame(item, target)
            if res:
                return res
    return None

frame = find_frame(canvas, "Joint-Mob-2")
if not frame:
    print("Frame Joint-Mob-2 not found.")
    sys.exit(1)

print(f"Extracting from frame: {frame.get('name')} (id: {frame.get('id')})")

# We'll collect design tokens
design = {
    'colors': set(),
    'text_styles': [],
    'layout_blocks': [],  # each block represents a visual element (rectangle, frame, etc.)
    'images': []          # placeholder for image nodes
}

def process_node(node, path=""):
    # Get basic info
    node_type = node.get('type')
    node_name = node.get('name', '')
    node_id = node.get('id', '')

    # Absolute bounding box
    abs_box = node.get('absoluteBoundingBox', {})

    # Fills -> colors
    fills = node.get('fills', [])
    for fill in fills:
        if fill.get('type') == 'SOLID':
            color = fill.get('color')
            if color:
                r = int(color.get('r', 0) * 255)
                g = int(color.get('g', 0) * 255)
                b = int(color.get('b', 0) * 255)
                a = color.get('a', 1.0)
                design['colors'].add(f'rgba({r},{g},{b},{a})')
        # TODO: handle gradients, images

    # Strokes -> colors (optional)
    strokes = node.get('strokes', [])
    for stroke in strokes:
        if stroke.get('type') == 'SOLID':
            color = stroke.get('color')
            if color:
                r = int(color.get('r', 0) * 255)
                g = int(color.get('g', 0) * 255)
                b = int(color.get('b', 0) * 255)
                a = color.get('a', 1.0)
                design['colors'].add(f'rgba({r},{g},{b},{a})')

    # Text node
    if node_type == 'TEXT':
        style = {
            'fontFamily': node.get('fontFamily'),
            'fontWeight': node.get('fontWeight'),
            'fontSize': node.get('fontSize'),
            'text': node.get('characters', ''),
            'letterSpacing': node.get('letterSpacing'),
            'lineHeight': node.get('lineHeight'),
            'textAlignHorizontal': node.get('textAlignHorizontal'),
            'textAlignVertical': node.get('textAlignVertical'),
            'fills': node.get('fills')
        }
        design['text_styles'].append(style)

    # For layout, we consider rectangles, frames, vectors as potential blocks
    if node_type in ['RECTANGLE', 'FRAME', 'VECTOR', 'ELLIPSE', 'POLYGON', 'STAR', 'LINE']:
        # Only include if visible and opacity > 0
        if node.get('visible', True) and node.get('opacity', 1.0) > 0:
            block = {
                'type': node_type,
                'name': node_name,
                'id': node_id,
                'x': abs_box.get('x', 0),
                'y': abs_box.get('y', 0),
                'width': abs_box.get('width', 0),
                'height': abs_box.get('height', 0),
                'rotation': node.get('rotation', 0),
                'opacity': node.get('opacity', 1.0),
                'visible': node.get('visible', True),
                'fills': fills,
                'strokes': strokes,
                'strokeWeight': node.get('strokeWeight'),
                'strokeAlign': node.get('strokeAlign'),
                'cornerRadius': node.get('cornerRadius')  # for rectangles
            }
            design['layout_blocks'].append(block)

    # Recurse into children
    for child in node.get('children', []):
        process_node(child, path + '.' + node_name)

# Start processing from the frame
process_node(frame)

# Post-process: convert colors set to sorted list
design['colors'] = sorted(design['colors'])

# Output to file for inspection
output_path = r"C:\Users\Сократ\Documents\GitHub\FMF_landing\versions\ver4 — копия\design_tokens.json"
with open(output_path, 'w', encoding='utf-8') as f:
    json.dump(design, f, indent=2)

print(f"Design tokens saved to {output_path}")
print(f"Found {len(design['colors'])} unique colors")
print(f"Found {len(design['text_styles'])} text styles")
print(f"Found {len(design['layout_blocks'])} layout blocks")

# Print a summary of colors
print("\nColors:")
for c in design['colors']:
    print(f"  {c}")

# Print first few text styles
print("\nText styles (first 5):")
for i, style in enumerate(design['text_styles'][:5]):
    print(f"  {i+1}. {style.get('fontFamily')} {style.get('fontWeight')} {style.get('fontSize')}px")
    print(f"     Text: {style.get('text')[:30]}...")
    print(f"     Letter spacing: {style.get('letterSpacing')}, Line height: {style.get('lineHeight')}")
    print(f"     Align: {style.get('textAlignHorizontal')} x {style.get('textAlignVertical')}")

# Print first few layout blocks
print("\nLayout blocks (first 10):")
for i, block in enumerate(design['layout_blocks'][:10]):
    print(f"  {i+1}. {block['type']} '{block['name']}' at ({block['x']}, {block['y']}) size {block['width']}x{block['height']}")