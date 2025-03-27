import { TeamMember } from '../schemas/mongoose/team-member';
import { MemberRequest } from '../types';

export class TeamMemberRepository {
  static listMembers() {
    return TeamMember.find();
  }

  static newMember(member: MemberRequest) {
    return TeamMember.create({
      ...member,
      createdAt: new Date(),
      updatedAt: new Date(),
    });
  }
}
