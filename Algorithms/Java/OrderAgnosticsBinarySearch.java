

public class OrderAgnosticsBinarySearch {
	public static void main(String[] args) {

		int[] arr = { 1,2,3,4,5,6,7,8 };
		System.out.println(orderAgnostics(arr, 8));

	}

	static int orderAgnostics(int[] arr, int target) {

		int start = 0, end = arr.length - 1;
		int target_index = -1;

		boolean isAsc = arr[start] < arr[end];

		while (start <= end) {

//			int mid = (start + end) / 2; // it might be possible that start+end exceeds integer limit

			int mid = start + (end - start) / 2;

			if (target == arr[mid]) {
				target_index = mid;
				break;
			}

//			
				if (isAsc) {
					if (target > arr[mid]) {
						start = mid + 1;
					} else if (target < arr[mid]) {
						end = mid - 1;
					}

				} else {
					if (target < arr[mid]) {
						start = mid + 1;
					} else if (target > arr[mid]) {
						end = mid - 1;
					}

				}

			}
		
	return target_index;
}

}
