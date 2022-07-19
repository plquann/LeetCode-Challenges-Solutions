import java.util.Arrays;

// SOLUTION 1: BUBBLE SORT

class Solution 
{
        public ListNode sortList( ListNode head ) 
        {
                ListNode current = head;
                
                if (head == null) 
                {
                        return null;
                }

                while( current != null ) 
                {
                        ListNode next = current.next;
                        while( next != null ) 
                        {
                                if( current.val > next.val )
                                {
                                        swapNodes( current, next );
                                }
                                next = next.next;
                        }
                        current = current.next;
                }
                return head;
        }

        public void swapNodes( ListNode node1, ListNode node2 )
        {
                int temp = node1.val;
                node1.val = node2.val;
                node2.val = temp;
        }
}

// SOLUTION 2: USING ADDITIONAL DATA STRUCTURE ARRAY

class Solution 
{
        public ListNode sortList( ListNode head ) 
        {
                int count = 0;
                ListNode current = head;

                while( current != null )
                {
                        count++;
                        current = current.next;
                }

                int arr[] = new int[count];
                current = head;
                int i = 0;
            
                while( current != null )
                {
                        arr[i++] = current.val;
                        current = current.next;
                }
                Arrays.sort( arr );
        }
}