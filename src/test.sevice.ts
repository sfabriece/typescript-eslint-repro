import { Processor, Process } from '@nestjs/bull';
import { Injectable } from '@nestjs/common';
import { Job } from 'bull';

export const enum KIND {
    A = 'A',
    B = 'B',
    C = 'C',
  }
  
  export type DATA = {
    [KIND.A]: Record<string, unknown>;
    [KIND.B]: Record<string, unknown>;
    [KIND.C]: Record<string, unknown>;
  };

@Processor('QUEUE')
@Injectable()
export class Test{

  @Process()
  async handle<T extends KIND>(
    job: Job<{
      kind: KIND;
      data?: DATA[T];
    }>,
  ): Promise<void> {
   console.log(job);
  }
}
