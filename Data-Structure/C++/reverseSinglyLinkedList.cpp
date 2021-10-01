/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     ListNode *next;
 *     ListNode() : val(0), next(nullptr) {}
 *     ListNode(int x) : val(x), next(nullptr) {}
 *     ListNode(int x, ListNode *next) : val(x), next(next) {}
 * };
 */
class Solution {
public:
    ListNode* reverseList(ListNode* head) {
        /*
            prev pointer points to NULL initially, curr to head and n to next of curr(head)
        */
        ListNode* prev = NULL;
        ListNode* cur = head;
        ListNode* n;
        
            // iterate till curr is not NULL
        while(cur != NULL){
                // appointing n as next of curr
            n = cur->next;
                // reversing next pointer of curr in each iteration
            cur->next = prev;
                // moving one step ahead in LL each time
            prev = cur;
            cur = n;
        }
        
            // last position of prev will be the head of the reversed LL
        return prev;
    }
    // Contributed by Piyush Arora (Leetcode problem # 206)
};
