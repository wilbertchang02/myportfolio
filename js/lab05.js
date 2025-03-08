// Problem 1
$(document).ready(function(){
    $(function(){
        let $parts = $(".parts");
        $parts.draggable({
            stack: ".parts",
            containment: "parent",
            cursor: "move"
        });
    });

    $(function(){
        let $saveBtn = $(".save_image");

        $saveBtn.click(function(){
            html2canvas(document.getElementById("problem-1")).then(function (canvas){
                let savedImg = canvas.toDataURL('image/jpg');
                let link = document.createElement('a');
                link.href = savedImg;
                link.download = 'save_mr_potato_head.jpg';
                link.click();
            });
        });
    });

});

//Problem 2
$(document).ready(function() {
    $(function() {
        let $image = $(".image");
        let $exitButton = $(".exit_btn");

        $exitButton.hide();

        $exitButton.click(function(event) {

            event.preventDefault();
            $image.animate({ height: '20%', width: '20%' }, 5000, function() {
                $exitButton.show();

            });
        });

        $image.on({
            mouseenter: function() {
                $exitButton.hide();

                    $image.animate({ height: '100%', width: '100%' }, 10000, function() {
                        
                    $exitButton.show()
                });
            }
        });
    });
});