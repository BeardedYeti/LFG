define(function (require) {
    return {
        vGames: [
			{ url: "#/dota2", title: "DOTA2", image: "app/images/dota2.png" },
			{ url: "#/lol", title: "League of Legends", image: "app/images/lol.jpg" },
			{ url: "#/smite", title: "Smite", image: "app/images/smite.jpg" },
			{ url: "#/hots", title: "Heroes of the Storm", image: "app/images/hots.jpg" }
        ],
        listVideoGames: function () {
            return this.vGames;
        },

    }
})