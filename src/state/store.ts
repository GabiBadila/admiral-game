import {reactive} from 'vue'

export const store = reactive({
    currentPlayer: {
        name: null,
        email: null
    },
    secondsElapsed: 0,
    randomizedProduct: {
        imagePath: "",
        name: "",
        articleCode: "",
        components: [
            {
                name: "",
                articleCode: "",
            }
        ],
        componentsPerStep: {
            1: [],
            2: [],
            3: [],
            4: []
        }
    },
    builtProduct: {
        components: [],
    },
    leaderboard: {
        players: []
    },
    allProducts: [
        {
            imagePath: "WAFSF11AWALPSL080WACS100BWARTS0080WARTS0080.png",
            name: "MEATRACK 110 X 80 CM",
            articleCode: "WAFSF11AWALPSL080WACS100BWARTS0080WARTS0080",
            components: [
                {
                    name: "FORK-SIDE PANEL SET H 110",
                    articleCode: "WAFSF11A",
                },
                {
                    name: "LENGTH PROFILES SET L80",
                    articleCode: "WALPSL080",
                },
                {
                    name: "CASTORSET Ø100MM SWIVEL WITH AND WITHOUT BRAKE",
                    articleCode: "WACS100B",
                },
                {
                    name: "HANGING TUBE L80 ",
                    articleCode: "WARTS0080",
                },
                {
                    name: "HANGING TUBE L80 ",
                    articleCode: "WARTS0080",
                }
            ],
            componentsPerStep: {
                1: [{articleCode: "WAFSF11A", qty: 1}],
                2: [{articleCode: "WALPSL080", qty: 1}],
                3: [{articleCode: "WACS100B", qty: 1}],
                4: [{articleCode: "WARTS0080", qty: 2}],
            }
        },
        {
            imagePath: "WAFSF11AWALPSL160WACS100AWARTS0160WARTS0160WARTS0160WARTS0160.png",
            name: "MEATRACK 110 X 160 CM",
            articleCode: "WAFSF11AWALPSL160WACS100AWARTS0160WARTS0160WARTS0160WARTS0160",
            components: [
                {
                    name: "FORK-SIDE PANEL SET H 110",
                    articleCode: "WAFSF11A",
                },
                {
                    name: "LENGTH PROFILES SET L160",
                    articleCode: "WALPSL160",
                },
                {
                    name: "CASTORSET Ø100MM SWIVEL WITH BRAKE",
                    articleCode: "WACS100A",
                },
                {
                    name: "HANGING TUBE L160",
                    articleCode: "WARTS0160",
                },
                {
                    name: "HANGING TUBE L160",
                    articleCode: "WARTS0160",
                },
                {
                    name: "HANGING TUBE L160",
                    articleCode: "WARTS0160",
                },
                {
                    name: "HANGING TUBE L160",
                    articleCode: "WARTS0160",
                },
            ],
            componentsPerStep: {
                1: [{articleCode: "WAFSF11A", qty: 1}],
                2: [{articleCode: "WALPSL160", qty: 1}],
                3: [{articleCode: "WACS100A", qty: 1}],
                4: [{articleCode: "WARTS0160", qty: 4}],
            }
        },
        {
            imagePath: "WAFSF11AWALPSL160WACS125BWARTS0160WARTS0160WARTS0160WARTS0160.png",
            name: "MEATRACK 110 X 160 CM",
            articleCode: "WAFSF11AWALPSL160WACS125BWARTS0160WARTS0160WARTS0160WARTS0160",
            components: [
                {
                    name: "FORK-SIDE PANEL SET H 110",
                    articleCode: "WAFSF11A",
                },
                {
                    name: "LENGTH PROFILES SET L160",
                    articleCode: "WALPSL160",
                },
                {
                    name: "CASTORSET Ø125MM SWIVEL WITH AND WITHOUT BRAKE",
                    articleCode: "WACS125B",
                },
                {
                    name: "HANGING TUBE L160",
                    articleCode: "WARTS0160",
                },
                {
                    name: "HANGING TUBE L160",
                    articleCode: "WARTS0160",
                },
                {
                    name: "HANGING TUBE L160",
                    articleCode: "WARTS0160",
                },
                {
                    name: "HANGING TUBE L160",
                    articleCode: "WARTS0160",
                },
            ],
            componentsPerStep: {
                1: [{articleCode: "WAFSF11A", qty: 1}],
                2: [{articleCode: "WALPSL160", qty: 1}],
                3: [{articleCode: "WACS125B", qty: 1}],
                4: [{articleCode: "WARTS0160", qty: 4}],
            }
        },
        {
            imagePath: "WAFSF11AWALPSL180WACS125BWARTS0180WARTS0180WARTS0180WARTS0180.png",
            name: "MEATRACK 110 X 180 CM",
            articleCode: "WAFSF11AWALPSL180WACS125BWARTS0180WARTS0180WARTS0180WARTS0180",
            components: [
                {
                    name: "FORK-SIDE PANEL SET H 110",
                    articleCode: "WAFSF11A",
                },
                {
                    name: "LENGTH PROFILES SET L180",
                    articleCode: "WALPSL180",
                },
                {
                    name: "CASTORSET Ø125MM SWIVEL WITH AND WITHOUT BRAKE",
                    articleCode: "WACS125B",
                },
                {
                    name: "HANGING TUBE L180",
                    articleCode: "WARTS0180",
                },
                {
                    name: "HANGING TUBE L180",
                    articleCode: "WARTS0180",
                },
                {
                    name: "HANGING TUBE L180",
                    articleCode: "WARTS0180",
                },
                {
                    name: "HANGING TUBE L180",
                    articleCode: "WARTS0180",
                },
            ],
            componentsPerStep: {
                1: [{articleCode: "WAFSF11A", qty: 1}],
                2: [{articleCode: "WALPSL180", qty: 1}],
                3: [{articleCode: "WACS125B", qty: 1}],
                4: [{articleCode: "WARTS0180", qty: 4}],
            }
        },
        {
            imagePath: "WAFSF11AWALPSL210WACS125AWARTS0210WARTS0210WARTS0210WARTS0210.png",
            name: "MEATRACK 110 X 210 CM",
            articleCode: "WAFSF11AWALPSL210WACS125AWARTS0210WARTS0210WARTS0210WARTS0210",
            components: [
                {
                    name: "FORK-SIDE PANEL SET H 110",
                    articleCode: "WAFSF11A",
                },
                {
                    name: "LENGTH PROFILES SET L210",
                    articleCode: "WALPSL210",
                },
                {
                    name: "CASTORSET Ø125MM SWIVEL WITH BRAKE",
                    articleCode: "WACS125A",
                },
                {
                    name: "HANGING TUBE L210",
                    articleCode: "WARTS0210",
                },
                {
                    name: "HANGING TUBE L210",
                    articleCode: "WARTS0210",
                },
                {
                    name: "HANGING TUBE L210",
                    articleCode: "WARTS0210",
                },
                {
                    name: "HANGING TUBE L210",
                    articleCode: "WARTS0210",
                },
            ],
            componentsPerStep: {
                1: [{articleCode: "WAFSF11A", qty: 1}],
                2: [{articleCode: "WALPSL210", qty: 1}],
                3: [{articleCode: "WACS125A", qty: 1}],
                4: [{articleCode: "WARTS0210", qty: 4}],
            }
        },
        {
            imagePath: "WAFSF21AWALPSL080WACS125BWARTS0080WARTS0080WARTS0080WARTS0080.png",
            name: "MEATRACK 203 X 80 CM",
            articleCode: "WAFSF21AWALPSL080WACS125BWARTS0080WARTS0080WARTS0080WARTS0080",
            components: [
                {
                    name: "FORK-SIDE PANEL SET H 203",
                    articleCode: "WAFSF21A",
                },
                {
                    name: "LENGTH PROFILES SET L80",
                    articleCode: "WALPSL080",
                },
                {
                    name: "CASTORSET Ø125MM SWIVEL WITH AND WITHOUT BRAKE",
                    articleCode: "WACS125B",
                },
                {
                    name: "HANGING TUBE L80",
                    articleCode: "WARTS0080",
                },
                {
                    name: "HANGING TUBE L80",
                    articleCode: "WARTS0080",
                },
                {
                    name: "HANGING TUBE L80",
                    articleCode: "WARTS0080",
                },
                {
                    name: "HANGING TUBE L80",
                    articleCode: "WARTS0080",
                },
            ],
            componentsPerStep: {
                1: [{articleCode: "WAFSF21A", qty: 1}],
                2: [{articleCode: "WALPSL080", qty: 1}],
                3: [{articleCode: "WACS125B", qty: 1}],
                4: [{articleCode: "WARTS0080", qty: 4}],
            }
        },
        {
            imagePath: "WAFSF21AWALPSL160WACS125BWARTS0160WARTS0160WARTS0160WARTS0160WARTS0160WARTS0160.png",
            name: "MEATRACK 203 X 160 CM",
            articleCode: "WAFSF21AWALPSL160WACS125BWARTS0160WARTS0160WARTS0160WARTS0160WARTS0160WARTS0160",
            components: [
                {
                    name: "FORK-SIDE PANEL SET H 203",
                    articleCode: "WAFSF21A",
                },
                {
                    name: "LENGTH PROFILES SET L160",
                    articleCode: "WALPSL160",
                },
                {
                    name: "CASTORSET Ø125MM SWIVEL WITH AND WITHOUT BRAKE",
                    articleCode: "WACS125B",
                },
                {
                    name: "HANGING TUBE L160",
                    articleCode: "WARTS0160",
                },
                {
                    name: "HANGING TUBE L160",
                    articleCode: "WARTS0160",
                },
                {
                    name: "HANGING TUBE L160",
                    articleCode: "WARTS0160",
                },
                {
                    name: "HANGING TUBE L160",
                    articleCode: "WARTS0160",
                },
                {
                    name: "HANGING TUBE L160",
                    articleCode: "WARTS0160",
                },
                {
                    name: "HANGING TUBE L160",
                    articleCode: "WARTS0160",
                }
            ],
            componentsPerStep: {
                1: [{articleCode: "WAFSF21A", qty: 1}],
                2: [{articleCode: "WALPSL160", qty: 1}],
                3: [{articleCode: "WACS125B", qty: 1}],
                4: [{articleCode: "WARTS0160", qty: 6}],
            }
        },
        {
            imagePath: "WAFSF21AWALPSL180WACS125AWARTS0180WARTS0180WARTS0180WARTS0180WARTS0180WARTS0180.png",
            name: "MEATRACK 203 X 180 CM",
            articleCode: "WAFSF21AWALPSL180WACS125AWARTS0180WARTS0180WARTS0180WARTS0180WARTS0180WARTS0180",
            components: [
                {
                    name: "FORK-SIDE PANEL SET H 203",
                    articleCode: "WAFSF21A",
                },
                {
                    name: "LENGTH PROFILES SET L180",
                    articleCode: "WALPSL180",
                },
                {
                    name: "CASTORSET Ø125MM SWIVEL WITH BRAKE",
                    articleCode: "WACS125A",
                },
                {
                    name: "HANGING TUBE L180",
                    articleCode: "WARTS0180",
                },
                {
                    name: "HANGING TUBE L180",
                    articleCode: "WARTS0180",
                },
                {
                    name: "HANGING TUBE L180",
                    articleCode: "WARTS0180",
                },
                {
                    name: "HANGING TUBE L180",
                    articleCode: "WARTS0180",
                },
                {
                    name: "HANGING TUBE L180",
                    articleCode: "WARTS0180",
                },
                {
                    name: "HANGING TUBE L180",
                    articleCode: "WARTS0180",
                }
            ],
            componentsPerStep: {
                1: [{articleCode: "WAFSF21A", qty: 1}],
                2: [{articleCode: "WALPSL180", qty: 1}],
                3: [{articleCode: "WACS125A", qty: 1}],
                4: [{articleCode: "WARTS0180", qty: 6}],
            }
        },
        {
            imagePath: "WAFSF21AWALPSL210WACS125AWARTS0210WARTS0210WARTS0210WARTS0210WARTS0210WARTS0210.png",
            name: "MEATRACK 203 X 210 CM",
            articleCode: "WAFSF21AWALPSL210WACS125AWARTS0210WARTS0210WARTS0210WARTS0210WARTS0210WARTS0210",
            components: [
                {
                    name: "FORK-SIDE PANEL SET H 203",
                    articleCode: "WAFSF21A",
                },
                {
                    name: "LENGTH PROFILES SET L210",
                    articleCode: "WALPSL210",
                },
                {
                    name: "CASTORSET Ø125MM SWIVEL WITH BRAKE",
                    articleCode: "WACS125A",
                },
                {
                    name: "HANGING TUBE L210",
                    articleCode: "WARTS0210",
                },
                {
                    name: "HANGING TUBE L210",
                    articleCode: "WARTS0210",
                },
                {
                    name: "HANGING TUBE L210",
                    articleCode: "WARTS0210",
                },
                {
                    name: "HANGING TUBE L210",
                    articleCode: "WARTS0210",
                },
                {
                    name: "HANGING TUBE L210",
                    articleCode: "WARTS0210",
                },
                {
                    name: "HANGING TUBE L210",
                    articleCode: "WARTS0210",
                }
            ],
            componentsPerStep: {
                1: [{articleCode: "WAFSF21A", qty: 1}],
                2: [{articleCode: "WALPSL210", qty: 1}],
                3: [{articleCode: "WACS125A", qty: 1}],
                4: [{articleCode: "WARTS0210", qty: 6}],
            }
        },
        {
            imagePath: "WAFSF11AWALPSL180WACS160AWABFS016.png",
            name: "BALLETFLOOR CART 180 CM",
            articleCode: "WAFSF11AWALPSL180WACS160AWABFS016",
            components: [
                {
                    name: "FORK-SIDE PANEL SET H 110",
                    articleCode: "WAFSF11A",
                },
                {
                    name: "LENGTH PROFILES SET L180",
                    articleCode: "WALPSL180",
                },
                {
                    name: "CASTORSET Ø160MM SWIVEL WITH BRAKE",
                    articleCode: "WACS160A",
                },
                {
                    name: "BALLET FLOOR ROLLS CART 180",
                    articleCode: "WABFS016",
                }
            ],
            componentsPerStep: {
                1: [{articleCode: "WAFSF11A", qty: 1}],
                2: [{articleCode: "WALPSL180", qty: 1}],
                3: [{articleCode: "WACS160A", qty: 1}],
                4: [{articleCode: "WABFS016", qty: 1}],
            }
        },
        {
            imagePath: "WAFSF11AWALPSL180WACS160BWABFS016.png",
            name: "BALLETFLOOR CART 180 CM",
            articleCode: "WAFSF11AWALPSL180WACS160BWABFS016",
            components: [
                {
                    name: "FORK-SIDE PANEL SET H 110",
                    articleCode: "WAFSF11A",
                },
                {
                    name: "LENGTH PROFILES SET L180",
                    articleCode: "WALPSL180",
                },
                {
                    name: "CASTORSET Ø160MM WITH AND WITHOUT BRAKE",
                    articleCode: "WACS160B",
                },
                {
                    name: "BALLET FLOOR ROLLS CART 180",
                    articleCode: "WABFS016",
                }
            ],
            componentsPerStep: {
                1: [{articleCode: "WAFSF11A", qty: 1}],
                2: [{articleCode: "WALPSL180", qty: 1}],
                3: [{articleCode: "WACS160B", qty: 1}],
                4: [{articleCode: "WABFS016", qty: 1}],
            }
        },
        {
            imagePath: "WAFSF11AWALPSL210WACS160AWABFS019.png",
            name: "BALLETFLOOR CART 210 CM",
            articleCode: "WAFSF11AWALPSL210WACS160AWABFS019",
            components: [
                {
                    name: "FORK-SIDE PANEL SET H 110",
                    articleCode: "WAFSF11A",
                },
                {
                    name: "LENGTH PROFILES SET L210",
                    articleCode: "WALPSL210",
                },
                {
                    name: "CASTORSET Ø160MM SWIVEL WITH BRAKE",
                    articleCode: "WACS160A",
                },
                {
                    name: "BALLET FLOOR ROLLS CART 210",
                    articleCode: "WABFS019",
                }
            ],
            componentsPerStep: {
                1: [{articleCode: "WAFSF11A", qty: 1}],
                2: [{articleCode: "WALPSL210", qty: 1}],
                3: [{articleCode: "WACS160A", qty: 1}],
                4: [{articleCode: "WABFS019", qty: 1}],
            }
        },
        {
            imagePath: "WAFSF11AWALPSL210WACS160BWABFS019.png",
            name: "BALLETFLOOR CART 210 CM",
            articleCode: "WAFSF11AWALPSL210WACS160BWABFS019",
            components: [
                {
                    name: "FORK-SIDE PANEL SET H 110",
                    articleCode: "WAFSF11A",
                },
                {
                    name: "LENGTH PROFILES SET L210",
                    articleCode: "WALPSL210",
                },
                {
                    name: "CASTORSET Ø160MM WITH AND WITHOUT BRAKE",
                    articleCode: "WACS160B",
                },
                {
                    name: "BALLET FLOOR ROLLS CART 210",
                    articleCode: "WABFS019",
                }
            ],
            componentsPerStep: {
                1: [{articleCode: "WAFSF11A", qty: 1}],
                2: [{articleCode: "WALPSL210", qty: 1}],
                3: [{articleCode: "WACS160B", qty: 1}],
                4: [{articleCode: "WABFS019", qty: 1}],
            }
        },
        {
            imagePath: "WAFSF11AWALPSL230WACS160AWABFS021.png",
            name: "BALLETFLOOR CART 230 CM",
            articleCode: "WAFSF11AWALPSL230WACS160AWABFS021",
            components: [
                {
                    name: "FORK-SIDE PANEL SET H 110",
                    articleCode: "WAFSF11A",
                },
                {
                    name: "LENGTH PROFILES SET L230",
                    articleCode: "WALPSL230",
                },
                {
                    name: "CASTORSET Ø160MM SWIVEL WITH BRAKE",
                    articleCode: "WACS160A",
                },
                {
                    name: "BALLET FLOOR ROLLS CART 230",
                    articleCode: "WABFS021",
                }
            ],
            componentsPerStep: {
                1: [{articleCode: "WAFSF11A", qty: 1}],
                2: [{articleCode: "WALPSL230", qty: 1}],
                3: [{articleCode: "WACS160A", qty: 1}],
                4: [{articleCode: "WABFS021", qty: 1}],
            }
        },
        {
            imagePath: "WAFSF11AWALPSL230WACS160BWABFS021.png",
            name: "BALLETFLOOR CART 230 CM",
            articleCode: "WAFSF11AWALPSL230WACS160BWABFS021",
            components: [
                {
                    name: "FORK-SIDE PANEL SET H 110",
                    articleCode: "WAFSF11A",
                },
                {
                    name: "LENGTH PROFILES SET L230",
                    articleCode: "WALPSL230",
                },
                {
                    name: "CASTORSET Ø160MM WITH AND WITHOUT BRAKE",
                    articleCode: "WACS160B",
                },
                {
                    name: "BALLET FLOOR ROLLS CART 230",
                    articleCode: "WABFS021",
                }
            ],
            componentsPerStep: {
                1: [{articleCode: "WAFSF11A", qty: 1}],
                2: [{articleCode: "WALPSL230", qty: 1}],
                3: [{articleCode: "WACS160B", qty: 1}],
                4: [{articleCode: "WABFS021", qty: 1}],
            }
        },
        {
            imagePath: "WAFSS11BWALPSL080WACS100AWAM2N080WAM2N080WAM2N550WAM2N550WAM2N550WAM2N550.png",
            name: "CABLE CART 110 X 80 CM",
            articleCode: "WAFSS11BWALPSL080WACS100AWAM2N080WAM2N080WAM2N550WAM2N550WAM2N550WAM2N550",
            components: [
                {
                    name: "SLIM-LINE PANEL SET H 110 WITH CENTRE BRACKET",
                    articleCode: "WAFSS11B",
                },
                {
                    name: "LENGTH PROFILES SET L80",
                    articleCode: "WALPSL080",
                },
                {
                    name: "CASTORSET Ø100MM SWIVEL WITH BRAKE",
                    articleCode: "WACS100A",
                },
                {
                    name: "CABLE SUPPORT PROFILE  L80",
                    articleCode: "WAM2N080",
                },
                {
                    name: "CABLE SUPPORT PROFILE  L80",
                    articleCode: "WAM2N080",
                },
                {
                    name: "CABLEFORK",
                    articleCode: "WAM2N550",
                },
                {
                    name: "CABLEFORK",
                    articleCode: "WAM2N550",
                },
                {
                    name: "CABLEFORK",
                    articleCode: "WAM2N550",
                },
                {
                    name: "CABLEFORK",
                    articleCode: "WAM2N550",
                }
            ],
            componentsPerStep: {
                1: [{articleCode: "WAFSS11B", qty: 1}],
                2: [{articleCode: "WALPSL080", qty: 1}],
                3: [{articleCode: "WACS100A", qty: 1}],
                4: [{articleCode: "WAM2N080", qty: 2}, {articleCode: "WAM2N550", qty: 4}],
            }
        },
        {
            imagePath: "WAFSS11BWALPSL080WACS100BWAM2N080WAM2N080WAM2N550WAM2N550WAM2N550WAM2N550.png",
            name: "CABLE CART 110 X 80 CM",
            articleCode: "WAFSS11BWALPSL080WACS100BWAM2N080WAM2N080WAM2N550WAM2N550WAM2N550WAM2N550",
            components: [
                {
                    name: "SLIM-LINE PANEL SET H 110 WITH CENTRE BRACKET",
                    articleCode: "WAFSS11B",
                },
                {
                    name: "LENGTH PROFILES SET L80",
                    articleCode: "WALPSL080",
                },
                {
                    name: "CASTORSET Ø100MM SWIVEL WITH AND WITHOUT BRAKE",
                    articleCode: "WACS100B",
                },
                {
                    name: "CABLE SUPPORT PROFILE  L80",
                    articleCode: "WAM2N080",
                },
                {
                    name: "CABLE SUPPORT PROFILE  L80",
                    articleCode: "WAM2N080",
                },
                {
                    name: "CABLEFORK",
                    articleCode: "WAM2N550",
                },
                {
                    name: "CABLEFORK",
                    articleCode: "WAM2N550",
                },
                {
                    name: "CABLEFORK",
                    articleCode: "WAM2N550",
                },
                {
                    name: "CABLEFORK",
                    articleCode: "WAM2N550",
                }
            ],
            componentsPerStep: {
                1: [{articleCode: "WAFSS11B", qty: 1}],
                2: [{articleCode: "WALPSL080", qty: 1}],
                3: [{articleCode: "WACS100B", qty: 1}],
                4: [{articleCode: "WAM2N080", qty: 2}, {articleCode: "WAM2N550", qty: 4}],
            }
        },
        {
            imagePath: "WAFSS11BWALPSL160WACS125AWAM2N160WAM2N160WAM2N550WAM2N550WAM2N550WAM2N550WAM2N550WAM2N550.png",
            name: "CABLE CART 110 X 160 CM",
            articleCode: "WAFSS11BWALPSL160WACS125AWAM2N160WAM2N160WAM2N550WAM2N550WAM2N550WAM2N550WAM2N550WAM2N550",
            components: [
                {
                    name: "SLIM-LINE PANEL SET H 110 WITH CENTRE BRACKET",
                    articleCode: "WAFSS11B",
                },
                {
                    name: "LENGTH PROFILES SET L160",
                    articleCode: "WALPSL160",
                },
                {
                    name: "CASTORSET Ø125MM SWIVEL WITH BRAKE",
                    articleCode: "WACS125A",
                },
                {
                    name: "CABLE SUPPORT PROFILE  L160",
                    articleCode: "WAM2N160",
                },
                {
                    name: "CABLE SUPPORT PROFILE  L160",
                    articleCode: "WAM2N160",
                },
                {
                    name: "CABLEFORK",
                    articleCode: "WAM2N550",
                },
                {
                    name: "CABLEFORK",
                    articleCode: "WAM2N550",
                },
                {
                    name: "CABLEFORK",
                    articleCode: "WAM2N550",
                },
                {
                    name: "CABLEFORK",
                    articleCode: "WAM2N550",
                },
                {
                    name: "CABLEFORK",
                    articleCode: "WAM2N550",
                },
                {
                    name: "CABLEFORK",
                    articleCode: "WAM2N550",
                }
            ],
            componentsPerStep: {
                1: [{articleCode: "WAFSS11B", qty: 1}],
                2: [{articleCode: "WALPSL160", qty: 1}],
                3: [{articleCode: "WACS125A", qty: 1}],
                4: [{articleCode: "WAM2N160", qty: 2}, {articleCode: "WAM2N550", qty: 6}],
            }
        },
        {
            imagePath: "WAFSS11BWALPSL210WACS125AWAM2N210WAM2N210WAM2N550WAM2N550WAM2N550WAM2N550WAM2N550WAM2N550WAM2N550WAM2N550.png",
            name: "CABLE CART 110 X 210 CM",
            articleCode: "WAFSS11BWALPSL210WACS125AWAM2N210WAM2N210WAM2N550WAM2N550WAM2N550WAM2N550WAM2N550WAM2N550WAM2N550WAM2N550",
            components: [
                {
                    name: "SLIM-LINE PANEL SET H 110 WITH CENTRE BRACKET",
                    articleCode: "WAFSS11B",
                },
                {
                    name: "LENGTH PROFILES SET L210",
                    articleCode: "WALPSL210",
                },
                {
                    name: "CASTORSET Ø125MM SWIVEL WITH BRAKE",
                    articleCode: "WACS125A",
                },
                {
                    name: "CABLE SUPPORT PROFILE  L210",
                    articleCode: "WAM2N210",
                },
                {
                    name: "CABLE SUPPORT PROFILE  L210",
                    articleCode: "WAM2N210",
                },
                {
                    name: "CABLEFORK",
                    articleCode: "WAM2N550",
                },
                {
                    name: "CABLEFORK",
                    articleCode: "WAM2N550",
                },
                {
                    name: "CABLEFORK",
                    articleCode: "WAM2N550",
                },
                {
                    name: "CABLEFORK",
                    articleCode: "WAM2N550",
                },
                {
                    name: "CABLEFORK",
                    articleCode: "WAM2N550",
                },
                {
                    name: "CABLEFORK",
                    articleCode: "WAM2N550",
                },
                {
                    name: "CABLEFORK",
                    articleCode: "WAM2N550",
                },
                {
                    name: "CABLEFORK",
                    articleCode: "WAM2N550",
                }
            ],
            componentsPerStep: {
                1: [{articleCode: "WAFSS11B", qty: 1}],
                2: [{articleCode: "WALPSL210", qty: 1}],
                3: [{articleCode: "WACS125A", qty: 1}],
                4: [{articleCode: "WAM2N210", qty: 2}, {articleCode: "WAM2N550", qty: 8}],
            }
        },
        {
            imagePath: "WAFSS21BWALPSL080WACS100AWAM2N080WAM2N080WAM2N080WAM2N550WAM2N550WAM2N550.png",
            name: "CABLE CART 110 X 80 CM",
            articleCode: "WAFSS21BWALPSL080WACS100AWAM2N080WAM2N080WAM2N080WAM2N550WAM2N550WAM2N550",
            components: [
                {
                    name: "SLIM-LINE PANEL SET H 203 WITH CENTRE BRACKET",
                    articleCode: "WAFSS21B",
                },
                {
                    name: "LENGTH PROFILES SET L80",
                    articleCode: "WALPSL080",
                },
                {
                    name: "CASTORSET Ø100MM SWIVEL WITH BRAKE",
                    articleCode: "WACS100A",
                },
                {
                    name: "CABLE SUPPORT PROFILE  L80",
                    articleCode: "WAM2N080",
                },
                {
                    name: "CABLE SUPPORT PROFILE  L80",
                    articleCode: "WAM2N080",
                },
                {
                    name: "CABLE SUPPORT PROFILE  L80",
                    articleCode: "WAM2N080",
                },
                {
                    name: "CABLEFORK",
                    articleCode: "WAM2N550",
                },
                {
                    name: "CABLEFORK",
                    articleCode: "WAM2N550",
                },
                {
                    name: "CABLEFORK",
                    articleCode: "WAM2N550",
                }
            ],
            componentsPerStep: {
                1: [{articleCode: "WAFSS21B", qty: 1}],
                2: [{articleCode: "WALPSL080", qty: 1}],
                3: [{articleCode: "WACS100A", qty: 1}],
                4: [{articleCode: "WAM2N080", qty: 3}, {articleCode: "WAM2N550", qty: 3}],
            }
        },
        {
            imagePath: "WAFSS21BWALPSL160WACS125AWAM2N160WAM2N160WAM2N160WAM2N550WAM2N550WAM2N550WAM2N550WAM2N550WAM2N550WAM2N550WAM2N550WAM2N550WAM2N550WAM2N550WAM2N550.png",
            name: "CABLE CART 110 X 160 CM",
            articleCode: "WAFSS21BWALPSL160WACS125AWAM2N160WAM2N160WAM2N160WAM2N550WAM2N550WAM2N550WAM2N550WAM2N550WAM2N550WAM2N550WAM2N550WAM2N550WAM2N550WAM2N550WAM2N550",
            components: [
                {
                    name: "SLIM-LINE PANEL SET H 203 WITH CENTRE BRACKET",
                    articleCode: "WAFSS21B",
                },
                {
                    name: "LENGTH PROFILES SET L160",
                    articleCode: "WALPSL160",
                },
                {
                    name: "CASTORSET Ø125MM SWIVEL WITH BRAKE",
                    articleCode: "WACS125A",
                },
                {
                    name: "CABLE SUPPORT PROFILE  L160",
                    articleCode: "WAM2N160",
                },
                {
                    name: "CABLE SUPPORT PROFILE  L160",
                    articleCode: "WAM2N160",
                },
                {
                    name: "CABLE SUPPORT PROFILE  L160",
                    articleCode: "WAM2N160",
                },
                {
                    name: "CABLEFORK",
                    articleCode: "WAM2N550",
                },
                {
                    name: "CABLEFORK",
                    articleCode: "WAM2N550",
                },
                {
                    name: "CABLEFORK",
                    articleCode: "WAM2N550",
                },
                {
                    name: "CABLEFORK",
                    articleCode: "WAM2N550",
                },
                {
                    name: "CABLEFORK",
                    articleCode: "WAM2N550",
                },
                {
                    name: "CABLEFORK",
                    articleCode: "WAM2N550",
                },
                {
                    name: "CABLEFORK",
                    articleCode: "WAM2N550",
                },
                {
                    name: "CABLEFORK",
                    articleCode: "WAM2N550",
                },
                {
                    name: "CABLEFORK",
                    articleCode: "WAM2N550",
                },
                {
                    name: "CABLEFORK",
                    articleCode: "WAM2N550",
                },
                {
                    name: "CABLEFORK",
                    articleCode: "WAM2N550",
                },
                {
                    name: "CABLEFORK",
                    articleCode: "WAM2N550",
                }
            ],
            componentsPerStep: {
                1: [{articleCode: "WAFSS21B", qty: 1}],
                2: [{articleCode: "WALPSL160", qty: 1}],
                3: [{articleCode: "WACS125A", qty: 1}],
                4: [{articleCode: "WAM2N160", qty: 3}, {articleCode: "WAM2N550", qty: 12}],
            }
        },
        {
            imagePath: "WAFSS21BWALPSL210WACS125AWAM2N210WAM2N210WAM2N550WAM2N550WAM2N550WAM2N550WAM2N550WAM2N550WAM2N550WAM2N550WAM2N550WAM2N550WAM2N550WAM2N550.png",
            name: "CABLE CART 110 X 210 CM",
            articleCode: "WAFSS21BWALPSL210WACS125AWAM2N210WAM2N210WAM2N550WAM2N550WAM2N550WAM2N550WAM2N550WAM2N550WAM2N550WAM2N550WAM2N550WAM2N550WAM2N550WAM2N550",
            components: [
                {
                    name: "SLIM-LINE PANEL SET H 203 WITH CENTRE BRACKET",
                    articleCode: "WAFSS21B",
                },
                {
                    name: "LENGTH PROFILES SET L210",
                    articleCode: "WALPSL210",
                },
                {
                    name: "CASTORSET Ø125MM SWIVEL WITH BRAKE",
                    articleCode: "WACS125A",
                },
                {
                    name: "CABLE SUPPORT PROFILE  L210",
                    articleCode: "WAM2N210",
                },
                {
                    name: "CABLE SUPPORT PROFILE  L210",
                    articleCode: "WAM2N210",
                },
                {
                    name: "CABLEFORK",
                    articleCode: "WAM2N550",
                },
                {
                    name: "CABLEFORK",
                    articleCode: "WAM2N550",
                },
                {
                    name: "CABLEFORK",
                    articleCode: "WAM2N550",
                },
                {
                    name: "CABLEFORK",
                    articleCode: "WAM2N550",
                },
                {
                    name: "CABLEFORK",
                    articleCode: "WAM2N550",
                },
                {
                    name: "CABLEFORK",
                    articleCode: "WAM2N550",
                },
                {
                    name: "CABLEFORK",
                    articleCode: "WAM2N550",
                },
                {
                    name: "CABLEFORK",
                    articleCode: "WAM2N550",
                },
                {
                    name: "CABLEFORK",
                    articleCode: "WAM2N550",
                },
                {
                    name: "CABLEFORK",
                    articleCode: "WAM2N550",
                },
                {
                    name: "CABLEFORK",
                    articleCode: "WAM2N550",
                },
                {
                    name: "CABLEFORK",
                    articleCode: "WAM2N550",
                }
            ],
            componentsPerStep: {
                1: [{articleCode: "WAFSS21B", qty: 1}],
                2: [{articleCode: "WALPSL210", qty: 1}],
                3: [{articleCode: "WACS125A", qty: 1}],
                4: [{articleCode: "WAM2N210", qty: 2}, {articleCode: "WAM2N550", qty: 12}],
            }
        },
        {
            imagePath: "WAM2P64WAM2P64WALPSL050WACS100BWACRS007WACRS007WACRS007WACRS007WACRS007WACRS007WACRS007WACRS007.png",
            name: "STORAGE CART 110 CM",
            articleCode: "WAM2P64WAM2P64WALPSL050WACS100BWACRS007WACRS007WACRS007WACRS007WACRS007WACRS007WACRS007WACRS007",
            components: [
                {
                    name: "SLIM-LINE PANEL H 110",
                    articleCode: "WAM2P64",
                },
                {
                    name: "SLIM-LINE PANEL H 110",
                    articleCode: "WAM2P64",
                },
                {
                    name: "LENGTH PROFILES SET L50",
                    articleCode: "WALPSL050",
                },
                {
                    name: "CASTORSET Ø100MM SWIVEL WITH AND WITHOUT BRAKE",
                    articleCode: "WACS100B",
                },
                {
                    name: "PLASTIC CRATE H 7.5",
                    articleCode: "WACRS007",
                },
                {
                    name: "PLASTIC CRATE H 7.5",
                    articleCode: "WACRS007",
                },
                {
                    name: "PLASTIC CRATE H 7.5",
                    articleCode: "WACRS007",
                },
                {
                    name: "PLASTIC CRATE H 7.5",
                    articleCode: "WACRS007",
                },
                {
                    name: "PLASTIC CRATE H 7.5",
                    articleCode: "WACRS007",
                },
                {
                    name: "PLASTIC CRATE H 7.5",
                    articleCode: "WACRS007",
                },
                {
                    name: "PLASTIC CRATE H 7.5",
                    articleCode: "WACRS007",
                },
                {
                    name: "PLASTIC CRATE H 7.5",
                    articleCode: "WACRS007",
                }
            ],
            componentsPerStep: {
                1: [{articleCode: "WAM2P64", qty: 2}],
                2: [{articleCode: "WALPSL050", qty: 1}],
                3: [{articleCode: "WACS100B", qty: 1}],
                4: [{articleCode: "WACRS007", qty: 8}],
            }
        },
        {
            imagePath: "WAM2P64WAM2P64WALPSL050WACS100AWACRS007WACRS032WACRS032.png",
            name: "STORAGE CART 110 CM",
            articleCode: "WAM2P64WAM2P64WALPSL050WACS100AWACRS007WACRS032WACRS032",
            components: [
                {
                    name: "SLIM-LINE PANEL H 110",
                    articleCode: "WAM2P64",
                },
                {
                    name: "SLIM-LINE PANEL H 110",
                    articleCode: "WAM2P64",
                },
                {
                    name: "LENGTH PROFILES SET L50",
                    articleCode: "WALPSL050",
                },
                {
                    name: "CASTORSET Ø100MM SWIVEL WITH BRAKE",
                    articleCode: "WACS100A",
                },
                {
                    name: "PLASTIC CRATE H 7.5",
                    articleCode: "WACRS007",
                },
                {
                    name: "PLASTIC CRATE H 32",
                    articleCode: "WACRS032",
                },
                {
                    name: "PLASTIC CRATE H 32",
                    articleCode: "WACRS032",
                }
            ],
            componentsPerStep: {
                1: [{articleCode: "WAM2P64", qty: 2}],
                2: [{articleCode: "WALPSL050", qty: 1}],
                3: [{articleCode: "WACS100A", qty: 1}],
                4: [{articleCode: "WACRS007", qty: 1}, {articleCode: "WACRS032", qty: 2}],
            }
        },
        {
            imagePath: "WAM2P64WAM2P64WALPSL050WACS125BWACRS007WACRS012WACRS012WACRS012WACRS022.png",
            name: "STORAGE CART 110 CM",
            articleCode: "WAM2P64WAM2P64WALPSL050WACS125BWACRS007WACRS012WACRS012WACRS012WACRS022",
            components: [
                {
                    name: "SLIM-LINE PANEL H 110",
                    articleCode: "WAM2P64",
                },
                {
                    name: "SLIM-LINE PANEL H 110",
                    articleCode: "WAM2P64",
                },
                {
                    name: "LENGTH PROFILES SET L50",
                    articleCode: "WALPSL050",
                },
                {
                    name: "CASTORSET Ø125MM SWIVEL WITH AND WITHOUT BRAKE",
                    articleCode: "WACS125B",
                },
                {
                    name: "PLASTIC CRATE H 7.5",
                    articleCode: "WACRS007",
                },
                {
                    name: "PLASTIC CRATE H 12",
                    articleCode: "WACRS012",
                },
                {
                    name: "PLASTIC CRATE H 12",
                    articleCode: "WACRS012",
                },
                {
                    name: "PLASTIC CRATE H 12",
                    articleCode: "WACRS012",
                },
                {
                    name: "PLASTIC CRATE H 22",
                    articleCode: "WACRS022",
                }
            ],
            componentsPerStep: {
                1: [{articleCode: "WAM2P64", qty: 2}],
                2: [{articleCode: "WALPSL050", qty: 1}],
                3: [{articleCode: "WACS125B", qty: 1}],
                4: [{articleCode: "WACRS007", qty: 1}, {articleCode: "WACRS012", qty: 3}, {
                    articleCode: "WACRS022",
                    qty: 1
                }],
            }
        },
        {
            imagePath: "WAM2P64WAM2P64WALPSL050WACS100BWACRS012WACRS012WACRS022WACRS022.png",
            name: "STORAGE CART 110 CM",
            articleCode: "WAM2P64WAM2P64WALPSL050WACS100BWACRS012WACRS012WACRS022WACRS022",
            components: [
                {
                    name: "SLIM-LINE PANEL H 110",
                    articleCode: "WAM2P64",
                },
                {
                    name: "SLIM-LINE PANEL H 110",
                    articleCode: "WAM2P64",
                },
                {
                    name: "LENGTH PROFILES SET L50",
                    articleCode: "WALPSL050",
                },
                {
                    name: "CASTORSET Ø100MM SWIVEL WITH AND WITHOUT BRAKE",
                    articleCode: "WACS100B",
                },
                {
                    name: "PLASTIC CRATE H 12",
                    articleCode: "WACRS012",
                },
                {
                    name: "PLASTIC CRATE H 12",
                    articleCode: "WACRS012",
                },
                {
                    name: "PLASTIC CRATE H 22",
                    articleCode: "WACRS022",
                },
                {
                    name: "PLASTIC CRATE H 22",
                    articleCode: "WACRS022",
                }
            ],
            componentsPerStep: {
                1: [{articleCode: "WAM2P64", qty: 2}],
                2: [{articleCode: "WALPSL050", qty: 1}],
                3: [{articleCode: "WACS100B", qty: 1}],
                4: [{articleCode: "WACRS012", qty: 2}, {articleCode: "WACRS022", qty: 2}],
            }
        },
        {
            imagePath: "WAM2P64WAM2P64WALPSL050WACS100AWACRS007WACRS007WACRS022WACRS032.png",
            name: "STORAGE CART 110 CM",
            articleCode: "WAM2P64WAM2P64WALPSL050WACS100AWACRS007WACRS007WACRS022WACRS032",
            components: [
                {
                    name: "SLIM-LINE PANEL H 110",
                    articleCode: "WAM2P64",
                },
                {
                    name: "SLIM-LINE PANEL H 110",
                    articleCode: "WAM2P64",
                },
                {
                    name: "LENGTH PROFILES SET L50",
                    articleCode: "WALPSL050",
                },
                {
                    name: "CASTORSET Ø100MM SWIVEL WITH BRAKE",
                    articleCode: "WACS100A",
                },
                {
                    name: "PLASTIC CRATE H 7.5",
                    articleCode: "WACRS007",
                },
                {
                    name: "PLASTIC CRATE H 7.5",
                    articleCode: "WACRS007",
                },
                {
                    name: "PLASTIC CRATE H 22",
                    articleCode: "WACRS022",
                },
                {
                    name: "PLASTIC CRATE H 32",
                    articleCode: "WACRS032",
                }
            ],
            componentsPerStep: {
                1: [{articleCode: "WAM2P64", qty: 2}],
                2: [{articleCode: "WALPSL050", qty: 1}],
                3: [{articleCode: "WACS100A", qty: 1}],
                4: [{articleCode: "WACRS007", qty: 2}, {articleCode: "WACRS022", qty: 1}, {
                    articleCode: "WACRS032",
                    qty: 1
                }],
            }
        },
        {
            imagePath: "WAM2P64WAM2P64WALPSL050WACS100AWACRS012WACRS012WACRS012WACRS032.png",
            name: "STORAGE CART 110 CM",
            articleCode: "WAM2P64WAM2P64WALPSL050WACS100AWACRS012WACRS012WACRS012WACRS032",
            components: [
                {
                    name: "SLIM-LINE PANEL H 110",
                    articleCode: "WAM2P64",
                },
                {
                    name: "SLIM-LINE PANEL H 110",
                    articleCode: "WAM2P64",
                },
                {
                    name: "LENGTH PROFILES SET L50",
                    articleCode: "WALPSL050",
                },
                {
                    name: "CASTORSET Ø100MM SWIVEL WITH BRAKE",
                    articleCode: "WACS100A",
                },
                {
                    name: "PLASTIC CRATE H 12",
                    articleCode: "WACRS012",
                },
                {
                    name: "PLASTIC CRATE H 12",
                    articleCode: "WACRS012",
                },
                {
                    name: "PLASTIC CRATE H 12",
                    articleCode: "WACRS012",
                },
                {
                    name: "PLASTIC CRATE H 32",
                    articleCode: "WACRS032",
                }
            ],
            componentsPerStep: {
                1: [{articleCode: "WAM2P64", qty: 2}],
                2: [{articleCode: "WALPSL050", qty: 1}],
                3: [{articleCode: "WACS100A", qty: 1}],
                4: [{articleCode: "WACRS012", qty: 3}, {articleCode: "WACRS032", qty: 1}],
            }
        },
        {
            imagePath: "WAM2P65WAM2P65WALPSL050WACS100AWACRS007WACRS007WACRS007WACRS007WACRS022WACRS022WACRS022WACRS022WACRS032.png",
            name: "STORAGE CART 203 CM",
            articleCode: "WAM2P65WAM2P65WALPSL050WACS100AWACRS007WACRS007WACRS007WACRS007WACRS022WACRS022WACRS022WACRS022WACRS032",
            components: [
                {
                    name: "SLIM-LINE PANEL H 203",
                    articleCode: "WAM2P65",
                },
                {
                    name: "SLIM-LINE PANEL H 203",
                    articleCode: "WAM2P65",
                },
                {
                    name: "LENGTH PROFILES SET L50",
                    articleCode: "WALPSL050",
                },
                {
                    name: "CASTORSET Ø100MM SWIVEL WITH BRAKE",
                    articleCode: "WACS100A",
                },
                {
                    name: "PLASTIC CRATE H 7.5",
                    articleCode: "WACRS007",
                },
                {
                    name: "PLASTIC CRATE H 7.5",
                    articleCode: "WACRS007",
                },
                {
                    name: "PLASTIC CRATE H 7.5",
                    articleCode: "WACRS007",
                },
                {
                    name: "PLASTIC CRATE H 7.5",
                    articleCode: "WACRS007",
                },
                {
                    name: "PLASTIC CRATE H 22",
                    articleCode: "WACRS022",
                },
                {
                    name: "PLASTIC CRATE H 22",
                    articleCode: "WACRS022",
                },
                {
                    name: "PLASTIC CRATE H 22",
                    articleCode: "WACRS022",
                },
                {
                    name: "PLASTIC CRATE H 22",
                    articleCode: "WACRS022",
                },
                {
                    name: "PLASTIC CRATE H 32",
                    articleCode: "WACRS032",
                },
            ],
            componentsPerStep: {
                1: [{articleCode: "WAM2P65", qty: 2}],
                2: [{articleCode: "WALPSL050", qty: 1}],
                3: [{articleCode: "WACS100A", qty: 1}],
                4: [{articleCode: "WACRS007", qty: 4}, {articleCode: "WACRS022", qty: 4}, {
                    articleCode: "WACRS032",
                    qty: 1
                }],
            }
        },
        {
            imagePath: "WAM2P65WAM2P65WALPSL050WACS125AWACRS032WACRS032WACRS032WACRS032WACRS032.png",
            name: "STORAGE CART 203 CM",
            articleCode: "WAM2P65WAM2P65WALPSL050WACS125AWACRS032WACRS032WACRS032WACRS032WACRS032",
            components: [
                {
                    name: "SLIM-LINE PANEL H 203",
                    articleCode: "WAM2P65",
                },
                {
                    name: "SLIM-LINE PANEL H 203",
                    articleCode: "WAM2P65",
                },
                {
                    name: "LENGTH PROFILES SET L50",
                    articleCode: "WALPSL050",
                },
                {
                    name: "CASTORSET Ø125MM SWIVEL WITH BRAKE",
                    articleCode: "WACS125A",
                },
                {
                    name: "PLASTIC CRATE H 32",
                    articleCode: "WACRS032",
                },
                {
                    name: "PLASTIC CRATE H 32",
                    articleCode: "WACRS032",
                },
                {
                    name: "PLASTIC CRATE H 32",
                    articleCode: "WACRS032",
                },
                {
                    name: "PLASTIC CRATE H 32",
                    articleCode: "WACRS032",
                },
                {
                    name: "PLASTIC CRATE H 32",
                    articleCode: "WACRS032",
                },
            ],
            componentsPerStep: {
                1: [{articleCode: "WAM2P65", qty: 2}],
                2: [{articleCode: "WALPSL050", qty: 1}],
                3: [{articleCode: "WACS125A", qty: 1}],
                4: [{articleCode: "WACRS032", qty: 5}],
            }
        },
        {
            imagePath: "WAM2P65WAM2P65WALPSL050WACS125AWACRS012WACRS012WACRS022WACRS022WACRS022WACRS032WACRS032.png",
            name: "STORAGE CART 203 CM",
            articleCode: "WAM2P65WAM2P65WALPSL050WACS125AWACRS012WACRS012WACRS022WACRS022WACRS022WACRS032WACRS032",
            components: [
                {
                    name: "SLIM-LINE PANEL H 203",
                    articleCode: "WAM2P65",
                },
                {
                    name: "SLIM-LINE PANEL H 203",
                    articleCode: "WAM2P65",
                },
                {
                    name: "LENGTH PROFILES SET L50",
                    articleCode: "WALPSL050",
                },
                {
                    name: "CASTORSET Ø125MM SWIVEL WITH BRAKE",
                    articleCode: "WACS125A",
                },
                {
                    name: "PLASTIC CRATE H 12",
                    articleCode: "WACRS012",
                },
                {
                    name: "PLASTIC CRATE H 12",
                    articleCode: "WACRS012",
                },
                {
                    name: "PLASTIC CRATE H 22",
                    articleCode: "WACRS022",
                },
                {
                    name: "PLASTIC CRATE H 22",
                    articleCode: "WACRS022",
                },
                {
                    name: "PLASTIC CRATE H 22",
                    articleCode: "WACRS022",
                },
                {
                    name: "PLASTIC CRATE H 32",
                    articleCode: "WACRS032",
                },
                {
                    name: "PLASTIC CRATE H 32",
                    articleCode: "WACRS032",
                },
            ],
            componentsPerStep: {
                1: [{articleCode: "WAM2P65", qty: 2}],
                2: [{articleCode: "WALPSL050", qty: 1}],
                3: [{articleCode: "WACS125A", qty: 1}],
                4: [{articleCode: "WACRS012", qty: 2}, {articleCode: "WACRS022", qty: 3}, {
                    articleCode: "WACRS032",
                    qty: 2
                }],
            }
        },
        {
            imagePath: "WAM2P65WAM2P65WALPSL050WACS125BWACRS007WACRS007WACRS022WACRS022WACRS032WACRS032WACRS032.png",
            name: "STORAGE CART 203 CM",
            articleCode: "WAM2P65WAM2P65WALPSL050WACS125BWACRS007WACRS007WACRS022WACRS022WACRS032WACRS032WACRS032",
            components: [
                {
                    name: "SLIM-LINE PANEL H 203",
                    articleCode: "WAM2P65",
                },
                {
                    name: "SLIM-LINE PANEL H 203",
                    articleCode: "WAM2P65",
                },
                {
                    name: "LENGTH PROFILES SET L50",
                    articleCode: "WALPSL050",
                },
                {
                    name: "CASTORSET Ø125MM SWIVEL WITH AND WITHOUT BRAKE",
                    articleCode: "WACS125B",
                },
                {
                    name: "PLASTIC CRATE H 7.5",
                    articleCode: "WACRS007",
                },
                {
                    name: "PLASTIC CRATE H 7.5",
                    articleCode: "WACRS007",
                },
                {
                    name: "PLASTIC CRATE H 22",
                    articleCode: "WACRS022",
                },
                {
                    name: "PLASTIC CRATE H 22",
                    articleCode: "WACRS022",
                },
                {
                    name: "PLASTIC CRATE H 32",
                    articleCode: "WACRS032",
                },
                {
                    name: "PLASTIC CRATE H 32",
                    articleCode: "WACRS032",
                },
                {
                    name: "PLASTIC CRATE H 32",
                    articleCode: "WACRS032",
                },
            ],
            componentsPerStep: {
                1: [{articleCode: "WAM2P65", qty: 2}],
                2: [{articleCode: "WALPSL050", qty: 1}],
                3: [{articleCode: "WACS1025B", qty: 1}],
                4: [{articleCode: "WACRS007", qty: 2}, {articleCode: "WACRS022", qty: 2}, {
                    articleCode: "WACRS032",
                    qty: 3
                }],
            }
        },
    ],
    step1Components: [
        {
            imagePath: "WAM2P64.jpg",
            name: "SLIM-LINE PANEL H 110",
            articleCode: "WAM2P64",
        },
        {
            imagePath: "WAM2P65.jpg",
            name: "SLIM-LINE PANEL H 203",
            articleCode: "WAM2P65",
        },
        {
            imagePath: "WAFSF11A.jpg",
            name: "FORK-SIDE PANEL SET H 110",
            articleCode: "WAFSF11A",
        },
        {
            imagePath: "WAFSF11B.jpg",
            name: "FORK-SIDE PANEL SET H 110 WITH CENTRE BRACKET",
            articleCode: "WAFSF11B",
        },
        {
            imagePath: "WAFSF21A.jpg",
            name: "FORK-SIDE PANEL SET H 203",
            articleCode: "WAFSF21A",
        },
        {
            imagePath: "WAFSF21B.jpg",
            name: "FORK-SIDE PANEL SET H 203 WITH CENTRE BRACKET",
            articleCode: "WAFSF21B",
        },
        {
            imagePath: "WAFSS11A.jpg",
            name: "SLIM-LINE PANEL SET H 110",
            articleCode: "WAFSS11A",
        },
        {
            imagePath: "WAFSS11B.jpg",
            name: "SLIM-LINE PANEL SET H 110 WITH CENTRE BRACKET",
            articleCode: "WAFSS11B",
        },
        {
            imagePath: "WAFSS21A.jpg",
            name: "SLIM-LINE PANEL SET H 203",
            articleCode: "WAFSS21A",
        },
        {
            imagePath: "WAFSS21B.jpg",
            name: "SLIM-LINE PANEL SET H 203 WITH CENTRE BRACKET",
            articleCode: "WAFSS21B",
        },
    ],
    step2Components: [
        {
            imagePath: "WALPSL050.jpg",
            name: "LENGTH PROFILES SET L50",
            articleCode: "WALPSL050",
        },
        {
            imagePath: "WALPSL080.jpg",
            name: "LENGTH PROFILES SET L80",
            articleCode: "WALPSL080",
        },
        {
            imagePath: "WALPSL160.jpg",
            name: "LENGTH PROFILES SET L160",
            articleCode: "WALPSL160",
        },
        {
            imagePath: "WALPSL180.jpg",
            name: "LENGTH PROFILES SET L180",
            articleCode: "WALPSL180",
        },
        {
            imagePath: "WALPSL210.jpg",
            name: "LENGTH PROFILES SET L210",
            articleCode: "WALPSL210",
        },
        {
            imagePath: "WALPSL230.jpg",
            name: "LENGTH PROFILES SET L230",
            articleCode: "WALPSL230",
        }
    ],
    step3Components: [
        {
            imagePath: "WACS100A.jpg",
            name: "CASTORSET Ø100MM SWIVEL WITH BRAKE",
            articleCode: "WACS100A",
        },
        {
            imagePath: "WACS100B.jpg",
            name: "CASTORSET Ø100MM SWIVEL WITH AND WITHOUT BRAKE",
            articleCode: "WACS100B",
        },
        {
            imagePath: "WACS125A.jpg",
            name: "CASTORSET Ø125MM SWIVEL WITH BRAKE",
            articleCode: "WACS125A",
        },
        {
            imagePath: "WACS125B.jpg",
            name: "CASTORSET Ø125MM SWIVEL WITH AND WITHOUT BRAKE ",
            articleCode: "WACS125B",
        },
        {
            imagePath: "WACS160A.jpg",
            name: "CASTORSET Ø160MM SWIVEL WITH BRAKE",
            articleCode: "WACS160A",
        },
        {
            imagePath: "WACS160B.jpg",
            name: "CASTORSET Ø160MM SWIVEL WITH AND WITHOUT BRAKE ",
            articleCode: "WACS160B",
        }
    ],
    step4Components: [
        {
            imagePath: "WARTS0080.jpg",
            name: "HANGING TUBE L80",
            articleCode: "WARTS0080",
        },
        {
            imagePath: "WARTS0160.jpg",
            name: "HANGING TUBE L160 ",
            articleCode: "WARTS0160",
        },
        {
            imagePath: "WARTS0180.jpg",
            name: "HANGING TUBE L180",
            articleCode: "WARTS0180",
        },
        {
            imagePath: "WARTS0210.jpg",
            name: "HANGING TUBE L210 ",
            articleCode: "WARTS0210",
        },
        {
            imagePath: "WAM2N080.jpg",
            name: "CABLE SUPPORT PROFILE L80",
            articleCode: "WAM2N080",
        },
        {
            imagePath: "WAM2N160.jpg",
            name: "CABLE SUPPORT PROFILE L160 ",
            articleCode: "WAM2N160",
        },
        {
            imagePath: "WAM2N210.jpg",
            name: "CABLE SUPPORT PROFILE L210",
            articleCode: "WAM2N210",
        },
        {
            imagePath: "WAM2N550.jpg",
            name: "CABLEFORK",
            articleCode: "WAM2N550",
        },
        {
            imagePath: "WABFS016.jpg",
            name: "BALLET FLOOR ROLLS CART L180",
            articleCode: "WABFS016",
        },
        {
            imagePath: "WABFS019.jpg",
            name: "BALLET FLOOR ROLLS CART L210",
            articleCode: "WABFS019",
        },
        {
            imagePath: "WABFS021.jpg",
            name: "BALLET FLOOR ROLLS CART L230",
            articleCode: "WABFS021",
        },
        {
            imagePath: "WACRS007.jpg",
            name: "PLASTIC CRATE H 7.5",
            articleCode: "WACRS007",
        },
        {
            imagePath: "WACRS012.jpg",
            name: "PLASTIC CRATE H 12",
            articleCode: "WACRS012",
        },
        {
            imagePath: "WACRS017.jpg",
            name: "PLASTIC CRATE H 17",
            articleCode: "WACRS017",
        },
        {
            imagePath: "WACRS022.jpg",
            name: "PLASTIC CRATE H 22",
            articleCode: "WACRS022",
        },
        {
            imagePath: "WACRS027.jpg",
            name: "PLASTIC CRATE H 27",
            articleCode: "WACRS027",
        },
        {
            imagePath: "WACRS032.jpg",
            name: "PLASTIC CRATE H 32",
            articleCode: "WACRS032",
        },
    ],
})