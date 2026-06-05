import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// Patch to prevent browser-extension DOM conflicts with React
const originalRemoveChild = Node.prototype.removeChild;
// @ts-ignore
Node.prototype.removeChild = function <T extends Node>(child: T): T {
  if (child.parentNode !== this) {
    if (console) {
      console.warn("Cannot remove a child from a different parent", child, this);
    }
    return child;
  }
  // @ts-ignore
  return originalRemoveChild.apply(this, arguments) as T;
};

const originalInsertBefore = Node.prototype.insertBefore;
// @ts-ignore
Node.prototype.insertBefore = function <T extends Node>(newNode: T, referenceNode: Node | null): T {
  if (referenceNode && referenceNode.parentNode !== this) {
    if (console) {
      console.warn("Cannot insert before a reference node from a different parent", referenceNode, this);
    }
    return newNode;
  }
  // @ts-ignore
  return originalInsertBefore.apply(this, arguments) as T;
};

createRoot(document.getElementById("root")!).render(<App />);
