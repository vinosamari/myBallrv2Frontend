const state = () => ({
  teams: [],
  players: [],
  currentTeam: {}
});

const mutations = {
  setTeams(state, allTeams) {
    state.teams = allTeams;
  },
  setPlayers(state, players) {
    state.players = players;
  }
};

const getters = {
  getNBAOnlyTeams: state => {
    console.log(state.teams);
  }
};

const actions = {
  async fetchAllTeams({ commit }) {
    const teams = "teams/league/standard";
    let allTeamsUrl = await this.$axios.get(`/api/${teams}`, {
      headers: {
        "x-rapidapi-key":
          process.env.RAPID_API_KEY ||
          "35118d8d31msh198772385ae1327p1376c4jsn401cb7b9034d",
        "x-rapidapi-host":
          process.env.RAPID_API_HOST || "api-nba-v1.p.rapidapi.com"
      }
    });
    commit("setTeams", allTeamsUrl.data.api["teams"]);
  },
  async getTeamDetails({ commit }, currentTeamID) {
    const team = `players/teamId/${currentTeamID}`;
    let allTeamsUrl = await this.$axios.get(`/api/${team}`, {
      headers: {
        "x-rapidapi-key":
          process.env.RAPID_API_KEY ||
          "35118d8d31msh198772385ae1327p1376c4jsn401cb7b9034d",
        "x-rapidapi-host":
          process.env.RAPID_API_HOST || "api-nba-v1.p.rapidapi.com"
      }
    });
    // console.log(allTeamsUrl.data.api.players);
    commit("setPlayers", allTeamsUrl.data.api.players);
  }
};

export default {
  state,
  mutations,
  actions,
  getters
};
