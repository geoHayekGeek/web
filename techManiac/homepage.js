        var clicked=false;
        function createMenu(items, listId){
            var ul = document.getElementById(listId);
            items.forEach(function(element, index, array){
                    var li = document.createElement("li");
                    li.classList.add("listItem");
                    var a = document.createElement("a");
                    a.classList.add("listLink");
                    var text = document.createTextNode(element);
                    li.appendChild(a);
                    a.appendChild(text);
                    ul.appendChild(li);
                }
            );
        }

        function toggleClass(first, second){
            $("div#" + first).click(
                function(){
                    $("div.show").removeClass("show");
                    $("div#" + second).addClass("show");
                }
            );
        }

        toggleClass("samsung", "samsungList");

        toggleClass("iphone", "iphoneList");

        toggleClass("laptops", "laptopsList");
        
        
        samsung=["samsung A10", "samsung z fold", "samsung A42 5G", "samsung Tab Active 3", "samsung A23 5G", "samsung M13 5G"];
        
        iphone=["Iphone SE", "Iphone 13 pro Max", "Iphone 13 Pro", "Iphone 13", "Iphone 13 mini", "Iphone 12 Pro Max", "Iphone 12 Pro", "Iphone 12", "Iphone 12 mini"];
        
        laptops=["MSI", "Hp Pavillon", "Hp Omen", "Macbook Pro", "Toshiba"]

        createMenu(iphone, "iphoneList");

        createMenu(samsung, "samsungList");

        createMenu(laptops, "laptopsList")

        