// package com.example;

// import org.teavm.jso.JSBody;

// public class SquareCalculator {
//     @JSBody(params = {"number"}, script = "return number * number;")
//     public static native double calculateSquare(double number);

//     public static void main(String[] args) {
//         // This method won't be used in the browser context
//     }
// }
package com.example;

import org.teavm.jso.JSBody;
import org.teavm.jso.JSExport;
import org.teavm.jso.JSModule;

@JSModule("SquareCalculator")
public class SquareCalculator {
    @JSExport
    public static double calculateSquare(double number) {
        return number * number;
    }
}
