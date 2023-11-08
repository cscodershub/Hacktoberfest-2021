print('Enter number of edges in the graph:- ')
n = int(input())
print('Enter number of vertices in the graph:- ')
m = int(input())
graph = []

print('Enter weighted edges of the graph')
for i in range(m):
    u, v, w = list(map(int, input().split()))
    graph.append([u, v, w])


def BellmanFord(src):
    dist = [float("inf") for i in range(n)]
    dist[src] = 0

   
    for i in range(n-1):
        for u, v, w in graph:
            if dist[u] != float("inf") and dist[u]+w < dist[v]:
                dist[v] = dist[u]+w
    cycle = 0
    for u, v, w in graph:
        if dist[u] != float("Inf") and dist[u] + w < dist[v]:
            print("Graph contains negative weight cycle")
            cycle = 1
            break
    if cycle == 0:
        print('Distance from source vertex',src)
        print('Vertex \t Distance from source')
        for i in range(len(dist)):
            print(i,'\t',dist[i])


BellmanFord(0)