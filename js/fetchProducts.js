function createNode(element) {
    return document.createElement(element);
}

function append(parent, el) {
    return parent.appendChild(el);
}

function getAllElementsFromJson(jsonPath, tag){

        var url = jsonPath;
        const fill = document.getElementById(tag);

        fetch(url)
            .then((resp) => resp.json())
            .then(function(data) {

                let todos = data.products;

                return todos.map(function(todo) {
                    let article = createNode('article');
                    let a = createNode("a");
                    let h2 = createNode("h2");
                    let p = createNode("p");

                    a.href = todo.hyperLink + "?productID=" + todo.productID;
                    a.innerHTML = "<img src=" + todo.src + " " + "class=" + "\"" + todo.classImg +"\">";
                    h2.innerHTML = todo.title;
                    p.innerHTML = todo.infoText;

                    append(article, a);
                    append(article, h2);
                    append(article, p);
                    append(fill, article);
                })
            })
            .catch(function(error) {
                console.log(error);
            });


}

function getProductSinglePage(jsonPath, tag, id) {

    var url = jsonPath;
    const fill = document.getElementById(tag);

    fetch(url)
        .then((resp) => resp.json())
        .then(function (data) {

            let todos = data.products;

            return todos.map(function (todo) {

                if(todo.productID === id){

                    let article1 = createNode('artocle');
                    let article = createNode('article');
                    let a = createNode("a");
                    let h2 = createNode("h2");
                    let p = createNode("p");
                    let p2 = createNode("p");
                    let p3 = createNode("p")
                    a.href = todo.hyperLink + "?productID=" + todo.productID;
                    a.innerHTML = "<img src=" + todo.src + " " + "class=" + "\"" + todo.classImg + "\">";
                    h2.innerHTML = todo.title;
                    p.innerHTML = todo.infoText;
                    p2.innerHTML = "Doft: " + todo.arom;
                    p3.innerHTML = "Pris: " + todo.price;


                    append(article1, a);
                    append(fill, article1);
                    append(article, h2);
                    append(article, p);
                    append(article, p2);
                    append(article, p3);
                    append(fill, article);
                }
            })
        })
        .catch(function (error) {
            console.log(error);
        });
}

    // Fullt medveten om att det vore smartare att skicka in två nummer, 1 för start och 2 för slut och endast ha en getElements variant. Skall putsa på detta nästa vecka
function gettThreeElementsFromJson(jsonPath, tag){

    var url = jsonPath;
    const fill = document.getElementById(tag);
    var stop = 7;

    fetch(url)
        .then((resp) => resp.json())
        .then(function (data) {

            let todos = data.products;

            return todos.map(function (todo) {


                if(stop <= 9){

                    let article = createNode('article')
                    let a = createNode("a");
                    let h2 = createNode("h2");
                    let p = createNode("p");

                    a.href = todo.hyperLink + "?productID=" + todo.productID;
                    a.innerHTML = "<img src=" + todo.src + " " + "class=" + "\"" + todo.classImg + "\">";
                    h2.innerHTML = todo.title;
                    p.innerHTML = todo.infoText;

                    append(article, a);
                    append(article, h2);
                    append(article, p);
                    append(fill, article);
                    stop += 1;
                }
            })
        })
        .catch(function (error) {
            console.log(error);
        });
}

function gettsixElementsFromJson(jsonPath, tag){

    var url = jsonPath;
    const fill = document.getElementById(tag);
    var stop = 0;

    fetch(url)
        .then((resp) => resp.json())
        .then(function (data) {

            let todos = data.products;

            return todos.map(function (todo) {

                if(stop <= 5){

                    let article = createNode('article')
                    let a = createNode("a");
                    let h2 = createNode("h2");
                    let p = createNode("p");

                    a.href = todo.hyperLink + "?productID=" + todo.productID;
                    a.innerHTML = "<img src=" + todo.src + " " + "class=" + "\"" + todo.classImg + "\">";
                    h2.innerHTML = todo.title;
                    p.innerHTML = todo.infoText;

                    append(article, a);
                    append(article, h2);
                    append(article, p);
                    append(fill, article);
                    stop += 1;
                }
            })
        })
        .catch(function (error) {
            console.log(error);
        });
}