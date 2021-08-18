/**
 * @param { number[] } nums
 * @return { number }
*/

/*
        SOLUTION 1: BRUTE FORCE APPROACH
                        Time Complexity: O(N^2), where N is the length of nums.
                        Space Complexity: O(1)
*/
var maxSubArray = function( nums ) {
        let sum = -100001;
        let temp = 0;
        for( let i=0; i<nums.length; i++ ){
                temp = nums[i];
                for( let j=i+1; j<nums.length; j++ ){
                        temp += nums[j];
                        if( temp < 0 ) {
                                break;
                        }
                        if( temp >= sum  ) {
                                sum = temp;    
                        }        
                }
                if( nums[i] > sum ) sum = nums[i];
        }
        return sum;
};