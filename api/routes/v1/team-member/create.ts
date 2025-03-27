import { TaskController } from '../../../controllers/taskController';
import { BadRequestError } from '../../../errors';
import { TeamMemberRepository } from '../../../repositories/teamMemberRepository';
import { TeamMemberSchema } from '../../../schemas/zod/team-member';
import { FastifyTypedInstance } from '../../../types';
import { zodToJsonSchema } from 'zod-to-json-schema';

export async function create(app: FastifyTypedInstance) {
  app.post(
    '/member',
    {
      schema: {
        tags: ['team-members'],
        description: 'Creates a team member',
        body: zodToJsonSchema(TeamMemberSchema),
        response: {
          201: zodToJsonSchema(TeamMemberSchema),
        },
      },
    },
    async (request, reply) => {
      const validation = TeamMemberSchema.safeParse(request.body);

      if (!validation.success) {
        throw new BadRequestError('Request error', validation.error.errors);
      }
      const member = await TeamMemberRepository.newMember(validation.data);
      return reply.status(201).send(member);
    }
  );
}
