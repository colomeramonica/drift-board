import { FastifyTypedInstance } from '../../../types';
import { z } from 'zod';
import { zodToJsonSchema } from 'zod-to-json-schema';
import {
  ListMembersSchema,
  TeamMemberSchema,
} from '../../../schemas/zod/team-member';
import { TeamMemberController } from '../../../controllers/teamMemberController';

export async function list(app: FastifyTypedInstance) {
  app.get('/members', {
    schema: {
      tags: ['team-members'],
      description: 'List team members',
      response: {
        200: {
          type: 'array',
          items: zodToJsonSchema(ListMembersSchema),
        },
      },
    },
    handler: async (request, reply) => {
      const members = await TeamMemberController.listMembers();
      return reply.status(200).send(members);
    },
  });
}
