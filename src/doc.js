/*
ROUTES
*/

/**
 * @swagger
 * tags:
 *   name: Message
 *   description: Endpoints of Message convert to SMS
 */

/*
CRUDE
*/

/**
 * @swagger
 * /messages/convert/sms:
 *  post:
 *    tags: [Message]
 *    description: Route of create Message with convertion message in numbers (store)
 *    parameters:
 *      - in: body
 *        name: store
 *        schema:
 *          $ref: "#definitions/CreateMessage"
 *          type: object
 *        description: The requisition receive body JSON with message, convert message in numbers and save. Field message is required.
 *
 *    responses:
 *      '200':
 *       description: return numbers of SMS message
 *      '400':
 *       description: Bad request of validation error
 */

/**
 * @swagger
 * /numbers/convert/sms:
 *  post:
 *    tags: [Numbers]
 *    description: Route of create Numbers with convertion numbers in message (store)
 *    parameters:
 *      - in: body
 *        name: store
 *        schema:
 *          $ref: "#definitions/CreateNumber"
 *          type: object
 *        description: The requisition receive body JSON with message, convert numbers in message and save. Field number is required.
 *
 *    responses:
 *      '200':
 *       description: return message of SMS message
 *      '400':
 *       description: Bad request of validation error
 */

/*
MODELS
*/

/**
 * @swagger
 * definitions:
 *   CreateMessage:
 *      type: "object"
 *      properties:
 *          message:
 *              type: "string"
 */

/**
 * @swagger
 * definitions:
 *   CreateNumber:
 *      type: "object"
 *      properties:
 *          number:
 *              type: "string"
 */
