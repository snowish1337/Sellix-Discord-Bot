const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require('discord.js');
const Sellix = require('sellix.io');
const api = new Sellix.Client('api_key');

module.exports = class CheckCommand extends BaseCommand {
  constructor() {
    super('check', 'sellix', []);
  }

  async run(client, message, args) {
    if (!args[0]) return message.channel.send('You cannot leave the orderID blank. (e.g. .check orderID)')

    api.getOrder(args[0]).then(data => message.channel.send(`OrderID: **${data.order.uniqid}**\n Email: **${data.order.customer_email}**\n Payment Way: **${data.order.gateway}**\n ProductID: **${data.order.product_id}**\n\n Paid at: **${data.order.day}.${data.order.month}.${data.order.year}**`));
  }
}