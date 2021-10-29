package ParkingExamen;

import javax.swing.*;

import java.util.Random;

import javax.swing.*;

public class SimplePassGenerator {
	
    static String generatePswd(int len)
    {
        System.out.println("Your Password:");
        String charsCaps = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        String chars = "abcdefghijklmnopqrstuvwxyz";
        String nums = "0123456789";
        String symbols = "!@#$%^&*_=+-/€.?<>)";

        String passSymbols = charsCaps + chars + nums + symbols;
        Random rnd = new Random();
        
        String password="";
       
        for (int i = 0; i < len; i++) 
        {
            password += String.valueOf(passSymbols.charAt(rnd.nextInt(passSymbols.length())));
            
        }
        return password;
    }
	
    public static void main(String arg[]){
        int number = Integer.parseInt(JOptionPane.showInputDialog(null,"Introduce the number enter one number of characters"));
        String pass=generatePswd(number);


        JOptionPane.showMessageDialog(null, "Your password is:\n" + pass, "Pass Generator", JOptionPane.INFORMATION_MESSAGE, null);
    }
}
