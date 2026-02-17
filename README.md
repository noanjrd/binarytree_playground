# 🌳 Binary Tree Playground

An interactive **Binary Tree Visualizer** built with **React**, **TypeScript**, **Vite**, and **Tailwind CSS**.

This project helps you **understand binary trees visually** by constructing trees from user input and displaying their structure dynamically.

**[🔗 Try it live here!](https://noanjrd.github.io/binarytree_playground/)**

## ✨ Features

### Core Functionality
* **Multiple Construction Methods**: Build trees using **Preorder** or **Postorder** traversal with null values
* **Binary Search Tree Support**: Validate and construct **BSTs** with automatic error detection for invalid trees
* **Automatic Save**: Your tree and settings are automatically saved in your browser. Pick up right where you left off
* **Dynamic Visualization**: 
  - Clean node and branch rendering
  - Automatic scaling based on tree depth
  - Smooth fade effects for large trees
  - Real-time updates as you type

### Educational Tools
* **Interactive Learning Modules**: 
  - **Binary Tree Basics**: Learn fundamental concepts and terminology
  - **Preorder Traversal**: Step-by-step explanations with visual examples and tree construction
  - **Inorder Traversal**: Understand in-order tree traversal (educational guide only)
  - **Postorder Traversal**: Detailed guides on node visitation order with tree construction
  - **BST Concepts**: Understand validation rules and practical applications
* **Challenge Mode**: Test your knowledge by recreating randomly generated trees of varying depths
* **One-Click Examples**: Click any example code to instantly load it into the visualizer

### User Experience
* **Intuitive Interface**: Simple input format with helpful tooltips
* **Error Handling**: Clear feedback for invalid inputs
* **Responsive Design**: Modern UI built with **Tailwind CSS** (desktop-optimized)
* **Context-Based State Management**: Clean architecture using React Context API


## 🎯 How to Use

1. **Enter your tree**: Type an array like `[1,2,3,null,4,5,null]` in the input field
2. **Choose traversal order**: Select **Preorder** or **Postorder** to construct your tree
3. **Optional**: Toggle BST mode to validate Binary Search Tree rules
4. **Visualize**: Your tree appears instantly with automatic saving
5. **Learn**: Explore the educational tabs for in-depth explanations, including **Inorder** traversal concepts

**Tip**: Use `null` to represent empty nodes for exact tree reconstruction.

## 🛠️ Tech Stack

* **React** - Component-based UI
* **TypeScript** - Type-safe development
* **Vite** - Fast build tooling
* **Tailwind CSS** - Utility-first styling


## 📦 Installation & Development

### Prerequisites
- Node.js 16+ and npm

### Quick Start

Clone the repository:

```bash
git clone https://github.com/noanjrd/binarytree_playground
cd binarytree_playground
```

Install dependencies:
```bash
npm install
```

Run the development server:
```bash
npm run dev
```

Open your browser at:
```bash
http://localhost:5173
```

Build for production:
```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
```

## 📁 Project Structure

```bash
binarytree_playground/
├── src/
│   ├── components/
│   │   ├── DisplayBinaryTree.tsx    # Tree rendering logic
│   │   ├── RadioGroup.tsx           # UI controls
│   │   └── explanations/            # Educational content
│   │       ├── Base.tsx             # Binary tree basics
│   │       ├── BST.tsx              # BST explanations
│   │       ├── Challenge.tsx        # Challenge mode
│   │       └── traversals/
│   │           ├── traversals.tsx   # Traversal selector
│   │           ├── Preorder.tsx     # Preorder explanations
│   │           ├── Inorder.tsx      # Inorder explanations
│   │           └── Postorder.tsx    # Postorder explanations
│   ├── contexts/
│   │   └── TreeContext.tsx          # Global state management
│   ├── utils/
│   │   ├── binaryTree.ts            # Tree construction algorithms
│   │   ├── generateTree.ts          # Challenge mode logic
│   │   ├── preorderTree.ts          # Preorder traversal
│   │   ├── postorderTree.ts         # Postorder traversal
│   │   └── storage.ts               # LocalStorage management
│   ├── types/
│   │   ├── types.ts                 # TypeScript interfaces
│   │   └── constants.ts             # App constants
│   └── styles/                      # CSS modules
├── public/                          # Static assets
```

## 🎓 Why This Project?

Binary trees are fundamental data structures in computer science, but they can be abstract and hard to visualize. This tool bridges the gap between theory and practice by letting you:

* Experiment with different input arrays and see immediate results
* Compare how **Preorder** vs **Postorder** construction affects tree structure
* Learn about **Inorder** traversal through interactive educational content
* Practice BST validation with real-time feedback
* Challenge yourself with randomly generated puzzles

Perfect for students learning data structures or developers refreshing their knowledge!

## 📄 License

MIT License - feel free to use this project for learning and teaching!
