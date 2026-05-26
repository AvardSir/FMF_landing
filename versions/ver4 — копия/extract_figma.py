import json
import sys
import os

# Path to the JSON file from the nodes endpoint
json_path = r"C:\Users\Сократ\.claude\projects\C--Users--------Documents-GitHub-FMF-landing-versions-ver4--------\ffc57d62-837f-45ad-8846-b6b33c1e2d97\tool-results\binxip01g.txt"

try:
    with open(json_path, 'r', encoding='utf-8') as f:
        data = json.load(f)
except Exception as e:
    print(f"Error loading JSON: {e}")
    sys.exit(1)

# The structure: data['nodes']['273:428']['document'] is the canvas node
canvas = data.get('nodes', {}).get('273:428', {}).get('document')
if not canvas:
    # Maybe the structure is different
    # Let's try to get the first node in the nodes dict
    nodes = data.get('nodes', {})
    if not nodes:
        print("No nodes found in the JSON.")
        sys.exit(1)
    # Take the first node's document
    canvas = list(nodes.values())[0].get('document')
    if not canvas:
        print("Could not find document in nodes.")
        sys.exit(1)

# Now traverse the canvas to find the frame we want: "Joint-Mob-2"
def find_frame(node, target_name):
    if node.get('type') == 'FRAME' and node.get('name') == target_name:
        return node
    for child in node.get('children', []):
        found = find_frame(child, target_name)
        if found:
            return found
    return None

target_frame = find_frame(canvas, "Joint-Mob-2")
if not target_frame:
    print("Frame 'Joint-Mob-2' not found.")
    # Let's list frame names to see what we have
    def list_frames(node, depth=0):
        if node.get('type') == 'FRAME':
            print("  " * depth + f"- {node.get('name')} (id: {node.get('id')})")
        for child in node.get('children', []):
            list_frames(child, depth+1)
    print("Available frames:")
    list_frames(canvas)
    sys.exit(1)

print(f"Found frame: {target_frame.get('name')} (id: {target_frame.get('id')})")

# Extract design tokens from the frame and its children
def extract_tokens(node, path=""):
    tokens = {
        'colors': set(),
        'text_styles': [],
        'layout': []
    }
    # Process fills for colors
    if 'fills' in node:
        for fill in node['fills']:
            if fill.get('type') == 'SOLID':
                color = fill.get('color')
                if color:
                    r = int(color.get('r', 0) * 255)
                    g = int(color.get('g', 0) * 255)
                    b = int(color.get('b', 0) * 255)
                    a = color.get('a', 1.0)
                    tokens['colors'].add(f'rgba({r},{g},{b},{a})')
            # Could add gradient, image etc. but skip for now
    # Process text
    if node.get('type') == 'TEXT':
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
        tokens['text_styles'].append(style)
    # Layout info (absolute bounding box, constraints, layout align, etc.)
    if 'absoluteBoundingBox' in node:
        box = node['absoluteBoundingBox']
        tokens['layout'].append({
            'name': node.get('name'),
            'id': node.get('id'),
            'x': box.get('x'),
            'y': box.get('y'),
            'width': box.get('width'),
            'height': box.get('height'),
            'rotation': node.get('rotation', 0),
            'visible': node.get('visible', True),
            'opacity': node.get('opacity', 1.0)
        })
    # Recurse into children
    for child in node.get('children', []):
        child_tokens = extract_tokens(child, path + '.' + node.get('name', ''))
        # Merge tokens
        tokens['colors'].update(child_tokens['colors'])
        tokens['text_styles'].extend(child_tokens['text_styles'])
        tokens['layout'].extend(child_tokens['layout'])
    return tokens

tokens = extract_tokens(target_frame)

# Output results
print("\n=== Colors ===")
for color in sorted(tokens['colors']):
    print(color)

print("\n=== Text Styles ===")
for i, style in enumerate(tokens['text_styles']):
    print(f"{i+1}. Font: {style.get('fontFamily')} {style.get('fontWeight')} {style.get('fontSize')}px")
    print(f"   Text: {style.get('text')[:50]}{'...' if len(style.get('text', '')) > 50 else ''}")
    print(f"   Letter spacing: {style.get('letterSpacing')}, Line height: {style.get('lineHeight')}")
    print(f"   Align: {style.get('textAlignHorizontal')} x {style.get('textAlignVertical')}")
    if style.get('fills'):
        for fill in style['fills']:
            if fill.get('type') == 'SOLID':
                c = fill.get('color')
                if c:
                    r = int(c.get('r',0)*255); g = int(c.get('g',0)*255); b = int(c.get('b',0)*255); a = c.get('a',1)
                    print(f"   Color: rgba({r},{g},{b},{a})")
    print()

print("\n=== Layout (bounding boxes) ===")
for layout in tokens['layout']:
    print(f"{layout['name']} (id: {layout['id']}): x={layout['x']}, y={layout['y']}, w={layout['width']}, h={layout['height']}, rotation={layout['rotation']}, visible={layout['visible']}, opacity={layout['opacity']}")
