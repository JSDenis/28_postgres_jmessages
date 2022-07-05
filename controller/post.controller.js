const db = require('../db')
class MessageController{

    async createMessage(req, res){
        const {date_send, content, user_id, dialog_id} = req.body
        const newMessage = await db.query(`INSERT INTO messages (date_send, content, dialog_id, user_id) VALUES ($1, $2, $3, $4) RETURNING *`, [date_send,content,dialog_id, user_id, ])
        res.json(newMessage.rows[0])
    }

    async getMessagesByUser (req, res){
        const {id} = req.query
        const getMessages = await db.query(`SELECT date_send, content, dialog_id FROM messages WHERE user_id=$1`, [id])
        console.log('GET DATA', getMessages.rows);
        res.json(getMessages.rows)
    }

}

module.exports = new MessageController()
