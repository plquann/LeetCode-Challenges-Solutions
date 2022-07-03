# Leetcode: https://leetcode.com/problems/inorder-successor-in-bst/

# Definition for a binary tree node.
# class TreeNode( object ):
#     def __init__( self, x ):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution( object ):
        def inorderSuccessor( self, root, p ):
                """
                :type root: TreeNode
                :type p: TreeNode
                :rtype: TreeNode
                """
                if root is None:
                        return []

                inOrderList = []
                stack = []
                currentNode = root

                while len( stack ) > 0 or currentNode:
                        if currentNode:
                                stack.append( currentNode )
                                currentNode = currentNode.left
                        else:
                                currentNode = stack.pop()
                                inOrderList.append( currentNode )
                                currentNode = currentNode.right

                isSuccessorFound = False
                for node in inOrderList:
                        if node.val == p.val:
                                isSuccessorFound = True
                                continue
                        if isSuccessorFound:
                                return node
                return None