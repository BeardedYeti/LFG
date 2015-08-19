define(function (require) {
    return {
        vGames: [
			{ id: "dota2", title: "DOTA2", image: "app/images/dota2.png" },
			{ id: "lol", title: "League of Legends", image: "app/images/lol.jpg" },
			{ id: "smite", title: "Smite", image: "app/images/smite.jpg" },
			{ id: "hots", title: "Heroes of the Storm", image: "app/images/hots.jpg" }
        ],
        listVideoGames: function () {
            return this.vGames;
        },

    }
})