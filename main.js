// Quick Add Post AJAX
var quickAddButton = document.querySelector("#quick-add-button");

if (quickAddButton) {
    quickAddButton.addEventListener("click", function () {
        var body = document.querySelector('.admin-quick-add [name="content"]').value;
        var array = body.split(',');
        for (i = 0; i < array.length; i++) {
            console.log(array[i]);
            var ourPostData = {
                "title": array[i],
                "content": array[i],
                "status": "publish"
            }

            var createPost = new XMLHttpRequest();
            createPost.open("POST", magicalData.siteURL + "/wp-json/wp/v2/pages");
            createPost.setRequestHeader("X-WP-Nonce", magicalData.nonce);
            createPost.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
            createPost.send(JSON.stringify(ourPostData));
            createPost.onreadystatechange = function () {
                if (createPost.readyState == 4) {
                    if (createPost.status == 201) {
                        document.querySelector('.admin-quick-add [name="content"]').value = '';
                        console.log(createPost.status);
                    } else {
                        console.log(createPost.status);
                    }
                }
            }
        }
    });
}