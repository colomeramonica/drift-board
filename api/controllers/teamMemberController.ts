import { TeamMemberRepository } from '../repositories/teamMemberRepository';
import { MemberRequest } from '../types';

export class TeamMemberController {
  static async listMembers() {
    return await TeamMemberRepository.listMembers();
  }

  static async createMember(member: MemberRequest) {
    return await TeamMemberRepository.newMember(member);
  }
}
