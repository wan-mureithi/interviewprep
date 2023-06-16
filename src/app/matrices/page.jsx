"use client";
import React,{useState} from 'react'

var isValid = function(s) {
    let stack = []; 
    for (let c of s) { 
        if (c === '(' || c === '{' || c === '[') {
            stack.push(c); 
        } else { 
            if (!stack.length || 
                (c === ')' && stack[stack.length - 1] !== '(') || 
                (c === '}' && stack[stack.length - 1] !== '{') ||
                (c === ']' && stack[stack.length - 1] !== '[')) {
                return false; 
            }
            stack.pop(); 
        }
    }
    return !stack.length;
};

const transposeMatrix = (matrix) => {
    const result = Array.from({ length : matrix[0].length }, () => 
        new Array(matrix.length).fill(0)
    )

    for(let r=0; r < matrix.length; r++){
        for(let c=0; c < matrix[0].length; c++){
             result[c][r] = matrix[r][c]
        }
    }
    return result;
}
const page = () => {
    const [matrix, setMatrix] = useState([[1,2,3],[4,5,6],[7,8,9]])
  return (
    <div>
        <h3>Transpose a 2D Array</h3>
       <div>
       {transposeMatrix(matrix)}
       </div>
        <textarea rows={4} value={matrix} onChange={(e) => setMatrix(e.target.value)} />
    </div>
  )
}

export default page