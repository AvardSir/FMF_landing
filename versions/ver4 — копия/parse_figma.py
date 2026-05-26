import json
import sys

json_path = r"C:\Users\Сократ\Documents\GitHub\FMF_landing\versions\ver4 — копия\figma_nodes.json"

try:
    with open(json_path, 'r', encoding='utf-8') as f:
        data = json.load(f)
except Exception as e:
    print(f"Error loading JSON: {e}")
    sys.exit(1)

print("JSON loaded successfully.")
print(f"Top-level keys: {list(data.keys())}")

# The structure we saw earlier: data['nodes']['273:428']['document']
nodes = data.get('nodes', {})
print(f"Nodes keys: {list(nodes.keys())}")

# There should be one key: '273:428'
canvas_id = list(nodes.keys())[0] if nodes else None
if canvas_id:
    canvas = nodes[canvas_id].get('document')
    print(f"Canvas name: {canvas.get('name') if canvas else 'None'}")
    # Now find frame Joint-Mob-2 recursively
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
    if frame:
        print(f"Found frame: {frame.get('name')} id:{frame.get('id')}")
        # Let's get some basic info: children count
        children = frame.get('children', [])
        print(f"Number of direct children: {len(children)}")
        # List first few children names
        for i, child in enumerate(children[:5]):
            print(f"  {i}: {child.get('name')} (type:{child.get('type')})")
    else:
        print("Frame Joint-Mob-2 not found.")
        # Let's try to list frame names in the canvas
        def list_frames(node, depth=0):
            if isinstance(node, dict):
                if node.get('type') == 'FRAME':
                    print("  " * depth + f"- {node.get('name')} (id:{node.get('id')})")
                for k, v in node.items():
                    if isinstance(v, (dict, list)):
                        list_frames(v, depth+1)
            elif isinstance(node, list):
                for item in node:
                    list_frames(item, depth+1)
        print("Frames in canvas:")
        list_frames(canvas)
else:
    print("Could not find canvas document.")
