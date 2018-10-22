// cach tao module dùng IIFE vs CLOSURE
var budgetController = (function() {

    // x vs add thì private 
    //publicTest thì public 
    //Bên trog publicTest truy cập dc x vs add là nhờ CLOSURE vì x vs add ở bên trong Closure
    //khởi tạo biến xong nó chạy hết từ trên xuống dưới trong function, sau đó nó return 
    // về 1 object, khi sử dụng function publicTest sẽ tạo ra CLOSURE 

    var x = 23;

    var add =  function(a) {
        return x + a;
    }

    return {
        publicTest: function(b) {
            return add(b);
        }
    }


})();

var UIController = (function() {



})();

var controller = (function(budgetCtrl, UICtrl) {
    var z = budgetCtrl.publicTest(5);

    return {
        anotherPublic: function() {
            console.log(z);
        }
    }

})(budgetController, UIController);