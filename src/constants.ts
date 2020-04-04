export class TicketStatus {
  public static NEW = 'NEW';
  public static AGENT_ON_FIELD = 'AGENT ON FIELD';
  public static NURSE_NEEDED = 'NURSE NEEDED';
  public static DOCTOR_NEEDED = 'DOCTOR NEEDED';
  public static MEDICAL_TEEM_NEEDED = 'MEDICAL TEAM NEEDED';
  public static RESOLVED = 'RESOLVED';

  public static getAll(): string[] {
    return [TicketStatus.NEW, TicketStatus.AGENT_ON_FIELD, TicketStatus.NURSE_NEEDED,
      TicketStatus.DOCTOR_NEEDED, TicketStatus.MEDICAL_TEEM_NEEDED, TicketStatus.RESOLVED];
  }

  public static getBadgeClass(ticketStatus: string): string {
    let classname: string;
    switch (ticketStatus) {
      case TicketStatus.NEW:
      case TicketStatus.AGENT_ON_FIELD:
        classname = 'badge-success';
        break;
      case TicketStatus.NURSE_NEEDED:
        classname = 'badge-warning';
        break;
      case TicketStatus.DOCTOR_NEEDED:
      case TicketStatus.MEDICAL_TEEM_NEEDED:
        classname = 'badge-danger';
        break;
      case TicketStatus.RESOLVED:
        classname = 'badge-secondary';
        break;
      default:
        classname = 'badge-primary';
    }
    return classname;
  }
}

export class Roles {
  public static ADMINISTRATOR = 'ADMINISTRATOR';
  public static OPERATOR = 'OPERATOR';
  public static FIELD_AGENT = 'FIELD_AGENT';
  public static DOCTOR = 'DOCTOR';
  public static NURSE = 'NURSE';

  public static getAll(): string[] {
    return [Roles.ADMINISTRATOR, Roles.OPERATOR, Roles.FIELD_AGENT,
      Roles.DOCTOR, Roles.NURSE];
  }
}


