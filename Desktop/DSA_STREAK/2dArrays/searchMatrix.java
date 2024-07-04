public class searchMatrix {

    public static void MatrixSearch( int matrix[][],int key) {
        int i=0;
        int j = matrix.length-1;
        while (true) {
            if(key < matrix[i][j]) {
                j--;
            }
            else if(key>matrix[i][j]) {
                i++;
            }
            else {
                System.out.print("Element found at ( " +i+", "+j +" )" );
                break;
            }
        }
    }
    public static void main(String args[]) {
        int arr[][] = {{10,20,30,40},{15,25,35,45},{27,29,37,48},{32,33,39,50}};
        MatrixSearch(arr, 33);
    }
}
