var scoreText = document.getElementById("score");
			var detText = document.getElementById("determine");
			var drawButton = document.getElementById("draw");
			var standButton = document.getElementById("stand");
			var playButton = document.getElementById("play");
			var playButton = document.getElementById("play");
			var plrTotal = 0;
			var aiTotal = 0;
			var aiLvl = 0;
			var plrBust = false;
			var aiBust = false;
			var aiPlayVar = 0;
			document.addEventListener("keypress", function(event) {
				if (event.keyCode == 113 && easyButton.disabled == false) {
					aiLvl = 1;startGame();
				} else if (event.keyCode == 119 && normalButton.disabled == false) {
					aiLvl = 2;startGame();
				} else if (event.keyCode == 101 && hardButton.disabled == false) {
					aiLvl = 3;startGame();
				} else if (event.keyCode == 108 && hardButton.disabled == false) {
					aiLvl = 4;startGame();
				} else if (event.keyCode == 97 && drawButton.disabled == false) {
					funcDraw();
				} else if (event.keyCode == 115 && standButton.disabled == false) {
					funcStand();
				} else if (event.keyCode == 100 && playButton.disabled == false) {
					playAgain();
				}
			});
			function funcDraw() {
				var cardDraw = (2 + Math.round(Math.random()*9));
				plrTotal = (plrTotal + cardDraw)
				scoreText.innerHTML = "Player: " + (plrTotal.toString()) + " | Computer (lvl " + (aiLvl.toString()) + "): " + (aiTotal.toString());
				if (plrTotal > 21) {
					plrBust = true;
					endGame();
				}
			}
			function funcStand() {
				drawButton.disabled = true;
				standButton.disabled = true;
				if (aiLvl < 3) {
					aiPlayVar = setInterval(aiPlay, 1000);
				} else {
					endGame();
				}
			}
			function startGame() {
				drawButton.disabled = false;
				standButton.disabled = false;
				playButton.disabled = true;
				easyButton.disabled = true;normalButton.disabled = true;hardButton.disabled = true;
				scoreText.innerHTML = "Player: " + (plrTotal.toString()) + " | Computer (lvl " + (aiLvl.toString()) + "): " + (aiTotal.toString());
				detText.innerHTML = "Currently playing...";
				if (aiLvl > 2) {
					drawButton.disabled = true;
					standButton.disabled = true;
					aiPlayVar = setInterval(aiPlay, 1000);
				}
			}
			function aiPlay() {
				if (aiLvl == 1) {
					var aiDec = (1 + Math.round(Math.random()))
					if (aiTotal < plrTotal) {
						var cardDraw = (2 + Math.round(Math.random()*9));
						aiTotal = (aiTotal + cardDraw);
						scoreText.innerHTML = "Player: " + (plrTotal.toString()) + " | Computer (lvl " + (aiLvl.toString()) + "): " + (aiTotal.toString());
						if (aiTotal > 21) {
							aiBust = true;
							endGame();
						}
					} else if (aiDec == 1) {
						var cardDraw = (2 + Math.round(Math.random()*9));
						aiTotal = (aiTotal + cardDraw);
						scoreText.innerHTML = "Player: " + (plrTotal.toString()) + " | Computer (lvl " + (aiLvl.toString()) + "): " + (aiTotal.toString());
						if (aiTotal > 21) {
							aiBust = true;
							endGame();
						}
					} else {
						endGame();
					}
				} else if (aiLvl == 2) {
					if (aiTotal < plrTotal) {
						var cardDraw = (2 + Math.round(Math.random()*9));
						aiTotal = (aiTotal + cardDraw);
						scoreText.innerHTML = "Player: " + (plrTotal.toString()) + " | Computer (lvl " + (aiLvl.toString()) + "): " + (aiTotal.toString());
						if (aiTotal > 21) {
							aiBust = true;
							endGame();
						}
					} else {
						endGame();
					}
				} else if (aiLvl == 3) {
					var aiDec = (1 + Math.round(Math.random()))
					if (aiTotal > 19) {
						playerTurn();						
					} else if (aiTotal > 17) {
						if (aiDec == 1) {
							var cardDraw = (2 + Math.round(Math.random()*9));
							aiTotal = (aiTotal + cardDraw);
							scoreText.innerHTML = "Player: " + (plrTotal.toString()) + " | Computer (lvl " + (aiLvl.toString()) + "): " + (aiTotal.toString());
							if (aiTotal > 21) {
								aiBust = true;
								endGame();
							}
						} else {
							playerTurn();
						}
					} else {
						if (aiTotal < 21) {
							var cardDraw = (2 + Math.round(Math.random()*9));
							aiTotal = (aiTotal + cardDraw);
							scoreText.innerHTML = "Player: " + (plrTotal.toString()) + " | Computer (lvl " + (aiLvl.toString()) + "): " + (aiTotal.toString());
							if (aiTotal > 21) {
								aiBust = true;
								endGame();
							}
						} else {
							playerTurn();
						}
					}	
				} else if (aiLvl == 4) {
					var aiDec = (1 + Math.round(Math.random()*9))
					if (aiTotal > 19) {
						playerTurn();						
					} else if (aiTotal > 17) {
						if (aiDec > 1) {
							var cardDraw = (2 + Math.round(Math.random()*2));
							aiTotal = (aiTotal + cardDraw);
							scoreText.innerHTML = "Player: " + (plrTotal.toString()) + " | Computer (lvl " + (aiLvl.toString()) + "): " + (aiTotal.toString());
							if (aiTotal > 21 && aiDec == 10) {
								console.log(aiDec);
								aiBust = true;
								endGame();
							} else if (aiTotal > 21 && aiDec < 10) {
								aiTotal = (aiTotal - cardDraw)
								scoreText.innerHTML = "Player: " + (plrTotal.toString()) + " | Computer (lvl " + (aiLvl.toString()) + "): " + (aiTotal.toString());
							}
						} else {
							playerTurn();
						}
					} else {
						if (aiTotal < 21) {
							var cardDraw = (2 + Math.round(Math.random()*9));
							aiTotal = (aiTotal + cardDraw);
							scoreText.innerHTML = "Player: " + (plrTotal.toString()) + " | Computer (lvl " + (aiLvl.toString()) + "): " + (aiTotal.toString());
							if (aiTotal > 21 && aiDec == 10) {
								console.log(aiDec);
								aiBust = true;
								endGame();
							} else if (aiTotal > 21 && aiDec < 10) {
								aiTotal = (aiTotal - cardDraw)
								scoreText.innerHTML = "Player: " + (plrTotal.toString()) + " | Computer (lvl " + (aiLvl.toString()) + "): " + (aiTotal.toString());
							}
						} else {
							playerTurn();
						}
					}	
				}	
			}
			function playerTurn() {
				drawButton.disabled = false;
				standButton.disabled = false;
				clearInterval(aiPlayVar);
			}
			function endGame() {
				clearInterval(aiPlayVar);
				if (plrBust == true) {
					detText.innerHTML = "Player Bust!";
				} else if (aiBust == true) {
					detText.innerHTML = "Computer Bust!";
				} else if (plrTotal > aiTotal) {
					detText.innerHTML = "Player Wins!";
				} else if (plrTotal < aiTotal) {
					detText.innerHTML = "Computer Wins!";
				} else if (plrTotal == aiTotal) {
					detText.innerHTML = "Tie!";
				}
				playButton.disabled = false;
			}
			function playAgain() {
				clearInterval(aiPlayVar);
				easyButton.disabled = false;normalButton.disabled = false;hardButton.disabled = false;
				drawButton.disabled = true;
				standButton.disabled = true;
				plrTotal = 0;
				aiTotal = 0;
				aiLvl = 0;
				plrBust = false;
				aiBust = false;
				aiPlayVar = 0;
				scoreText.innerHTML = "Player: " + (plrTotal.toString()) + " | Computer (lvl " + (aiLvl.toString()) + "): " + (aiTotal.toString());
				detText.innerHTML = "Not playing!";
			}
