const { response } = require('express');
const Game = require('../models/game');

/**
 * Obtener todos los juegos
 */
const findAllGames = async (req, res = response) => {
  try {
    const games = await Game.find();
    
    return res.json({
      ok: true,
      games
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: 'Se ha producido un error al obtener los juegos'
    });
  }
};


/**
 * Obtener juego por el id
 */
const findGame = async (req, res = response) => {

  const id = req.params.id; // id del juego 

  try {
    const game = await Game.findById(id);

    if (!game) {
      return res.status(404).json({
        ok: false,
        msg: 'Juego no encontrado'
      })
    }
    res.json({
      ok: true,
      game
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: 'Se ha producido un error al obtener el juego'
    });
  }
};

/**
 * Crear juego
 */
const createGame = async (req, res = response) => {
  try {
    const game = new Game({
      ...req.body
    });

    // Guardado en la BD
    await game.save();

    return res.json({
      ok: true,
      game
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: 'Se ha producido un error al crear el juego'
    });
  }
};

/**
* Actualizar juego
*/
const updateGame = async (req, res = response) => {

  const id = req.params.id; // id del juego

  const currentGame = {
    ...req.body
  }
  try {
    const game = await Game.findById(id);

    if (!game) {
      return res.status(404).json({
        ok: false,
        msg: 'juego no encontrado'
      });
    }
    const updatedGame = await Game.findByIdAndUpdate(id, currentGame, { new: true });

    return res.json({ 
      ok:true, 
      updatedGame 
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: 'Se ha producido un error al actualizar el juego'
    });
  }
};

/**
* Eliminar juego
*/
const deleteGame = async (req, res = response) => {

  const id = req.params.id; // id del juego

  try {
    const game = await Game.findById(id);

    // Se comprueba si existe el juego
    if (!game) {
      return res.status(404).json({
        ok: false,
        msg: 'El juego no existe en la BD'
      })
    }
    // Se elimina el juego
    await Game.findByIdAndDelete(id);

    res.json({ 
      ok: true
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: 'Error al eliminar el juego'
    })
  }
};


module.exports = {
  findAllGames,
  findGame,
  updateGame,
  createGame,
  deleteGame
}