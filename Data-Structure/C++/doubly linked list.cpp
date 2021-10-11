#include <stdio.h>
#include <stdlib.h>

// Creating a node
struct Node {
    int data;
    struct Node* next;
    struct Node* prev;
};

void push(struct Node** head_ref, int new_data)
{
    struct Node* new_node
        = (struct Node*)malloc(sizeof(struct Node));

    new_node->data = new_data;

    new_node->next = (*head_ref);
    new_node->prev = NULL;

    if ((*head_ref) != NULL)
        (*head_ref)->prev = new_node;

    (*head_ref) = new_node;
}

void insertBefore(struct Node** head_ref,
    struct Node* next_node, int new_data)
{

    struct Node* new_node
        = (struct Node*)malloc(sizeof(struct Node));

    new_node->data = new_data;
    new_node->prev = next_node->prev;
    next_node->prev = new_node;
    next_node->prev = new_node;
    new_node->next = next_node;

    if (new_node->prev != NULL)
        new_node->prev->next = new_node;
    else
        (*head_ref) = new_node;
}

void printList(struct Node* node)
{
    struct Node* last;
    printf("\nTraversal in reverse direction \n");
    while (node != NULL) {
        printf(" %d ", node->data);
        last = node;
        node = node->next;
    }

    printf("\nTraversal in forward direction \n");
    while (last != NULL) {
        printf(" %d ", last->data);
        last = last->prev;
    }
}

int main()
{
    struct Node* head = NULL;
    push(&head, 1);
    push(&head, 2);
    push(&head, 3);
    push(&head, 5);
    insertBefore(&head, head->next, 4);

    printList(head);
    return 0;
}