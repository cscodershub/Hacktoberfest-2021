// Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.

// The overall run time complexity should be O(log (m+n)).

 

// Example 1:

// Input: nums1 = [1,3], nums2 = [2]
// Output: 2.00000
// Explanation: merged array = [1,2,3] and median is 2.

class Solution {
    public double findMedianSortedArrays(int[] nums1, int[] nums2) {
        int n1 = nums1.length;
        int n2 = nums2.length;
        if(n1>n2){
            return findMedianSortedArrays(nums2, nums1);
        }
        int lo = 0, hi = n1;
        while(lo<=hi){
            int cut1 = lo + (hi-lo)/2;
            int cut2 = (n1+n2)/2 - cut1;
            
            double l1 = cut1 == 0?Integer.MIN_VALUE:nums1[cut1-1];
            double l2 = cut2 == 0?Integer.MIN_VALUE:nums2[cut2-1];
            double r1 = cut1 == n1?Integer.MAX_VALUE:nums1[cut1];
            double r2 = cut2 == n2?Integer.MAX_VALUE:nums2[cut2];
            
            if(l1>r2){
                hi = cut1 - 1;
            }
            else if(l2>r1){
                lo = cut1 + 1;
            }
            else{
                if((n1+n2)%2 == 0){
                    return (Math.max(l1,l2)+Math.min(r1,r2))/2;
                }else{
                    return Math.min(r1,r2);
                }
            }
        }
        return -1;
    }
}

public class medianOfTwoSortedArrays {
    public static void main(String args[]) {
        int[] arr1 = {1, 5, 9};
        int[] arr2 = { 8, 18, 24 };

        Solution obj = new Solution();
        System.out.println(obj.findMedianSortedArrays(arr1, arr2));
    }
}