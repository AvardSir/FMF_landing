import json
import sys

json_path = r"C:\Users\Сократ\Documents\GitHub\FMF_landing\versions\ver4 — copia\figma_nodes.json"

try:
    with open(json_path, 'r', encoding='utf-8') as f:
        data = json.load(f)
except Exception as e:
    print(f"Error loading JSON: {e}")
    sys.exit(1)

nodes = data.get('nodes', {})
canvas_id = list(nodes.keys())[0] if nodes else None
canvas = nodes[canvas_id].get('document')

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
    print("Frame not found")
    sys.exit(1)

def print_tree(node, depth=0, max_depth=10):
    if depth > max_depth:
        return
    indent = "  " * depth
    node_type = node.get('type', '')
    node_name = node.get('name', '')
    node_id = node.get('id', '')
    print(f"{indent}{node_type} '{node_name}' (id:{node_id})")
    if node_type == 'FRAME' or node_type == 'GROUP' or node_type == 'CANVAS' or node_type == 'DOCUMENT':
        for child in node.get('children', []):
            print_tree(child, depth+1, max_depth)

print("=== Frame Joint-Mob-2 tree ===")
print_tree(frame, max_depth=6)