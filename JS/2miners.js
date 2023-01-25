fetch('https://eth.2miners.com/api/accounts/3Di7z23JnBe8XLLLnkcaruKt63UtNtuER4')
.then(data => {
return data.json();
})
    .then(post => {

        document.getElementById("2MinersTable").innerHTML = '<div class="2MinersTable">' + (post.currentHashrate / 1000000).toFixed(2) + 'MH/s'
        document.getElementById("2MinersTable2").innerHTML = '<div class="2MinersTable2">' + 'Workers Online:' + post.workersOnline 
    });


