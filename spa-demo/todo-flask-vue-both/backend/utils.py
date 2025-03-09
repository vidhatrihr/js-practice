from flask import jsonify


def better_jsonify(obj):
  if isinstance(obj, list):
    return jsonify([o.to_dict() for o in obj])
  return jsonify(obj.to_dict())
