/*<!-- <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script> -->
    <!-- <script>
        $.getJSON('test.json', function(data){
            console.log(data.item.name);
            console.log(data.item.current.price);
        });
    </script> -->
    
    
    <!-- <script>---- OFFICIAL OSRS
        var goldneck = 1654
    
        $.ajax({
            url: 'https://cors-anywhere.herokuapp.com/http://services.runescape.com/m=itemdb_oldschool/api/catalogue/detail.json?item=1654',
            dataType: 'json',
            type: 'get',
            cache: 'false',
            success: function(data) {
                data = data.item
    if (data.id >= goldneck) {
    console.log(data)
    }
    
    
            }
        });
    </script> -->
    

    <!-- <script>
        var goldneck = 1654
    
        $.ajax({
            url: 'https://cors-anywhere.herokuapp.com/http://services.runescape.com/m=itemdb_oldschool/api/catalogue/items.json?category=1&alpha=y&page=z',
            dataType: 'json',
            type: 'get',
            cache: 'false',
            success: function(data) {
                $(console.log(data))
    
    
            }
        });
    </script> -->*/

//const filter = res.filter(word => word.length > 5)

// const search = document.getElementById('search');
// const matchList = document.getElementById('match-list');


// const searchStates =
// async function searchText() {
//     const response = await fetch('https://api.osrsbox.com/items');
//     const result = await response.json();
    
//     function matches(){ result.filter(state => {
//         const regex = new RegExp(`^${searchText}`, 'gi');
//         return state._items.match(regex)
//     })};
    
// };
//    search.addEventListener('input', () => searchStates(search.value));


const search = document.getElementById('search');

let item = [{ 
        id: 145,
        name: "sword",
        price: 560,
        members: false
    },{
        id: 146,
        name: "shield",
        price: 342,
        members: true  
    },{
        id: 100,
        name: "potion",
        price: 300,
        members: true
    },{
        id:101,
        name: "fish",
        price: 302,
        members: false
    }];



    const list = document.getElementById('list');

    function setList(group) {
        clearList();
        for (const person of group) {
            const item = document.createElement('li');
            item.classList.add('listitem-class-name-location');
            const text = document.createTextNode(person.name);
            item.appendChild(text);
            list.appendChild(item);

        }
        if (group.length ===0) {
            setNoResults();
        }
    }

    function clearList() {
        while (list.firstChild) {
            list.removeChild(list.firstChild);
        }

    }

    function setNoResults() {
        const item = document.createElement('li');
        item.classList.add('listitem-class-name-location');
        const text = document.createTextNode("No results found.");
        item.appendChild(text);
        list.appendChild(item);
    }

    function getRelevancy(value, searchTerm) {
        if (value === searchTerm){
            return 2;
        } else if (value.startWith(term)) {
            return 1;
        } else if (value.includes(searchTerm)){
            return 0;
        } else {
            return -1;
        }

    }

    const searchInput = document.getElementById('search');


    searchInput.addEventListener('input', (event) => {
        const value = event.target.value;
        if (value && value.trim().length > 0) {
            value = value.trim().toLowerCase();
            setList(item.filter(person => {
                return person.name.includes(value);
            }).sort((personA, personB) => {
                return getRelevancy(personB.name, value) - getRelevancy(personA.name, value)
            }));
        } else {
            clearList();
        }
    });