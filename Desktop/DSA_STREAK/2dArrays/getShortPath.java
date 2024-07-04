public class getShortPath {
    public static float strShortPath(String str) {
        int X=0,Y=0;
        for(int i=0; i<str.length(); i++) {
            char dir = str.charAt(i);
            // South
            if(dir == 'S') {
                Y--;
            }
            // North
            else if(dir == 'N') {
                Y++;
            }
            // East
            else if(dir == 'E') {
                X++;

            }
            else {
                X--;
            }
        }
        double Z= Math.pow(X, 2) + Math.pow(Y, 2);
        
        float Disp = (float) Math.sqrt(Z);
        return Disp;

    }
    public static void main(String args[]) {
        String str = "WNEENESENNN";
        System.out.print(strShortPath(str));
    }
}
