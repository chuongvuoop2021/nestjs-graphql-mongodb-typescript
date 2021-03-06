import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { v4 as uuid } from 'uuid'

import { Lesson } from './lesson.entity'
import { Repository } from 'typeorm';

@Injectable()
export class LessonService {
  constructor(
    @InjectRepository(Lesson) private lessonRepository: Repository<Lesson>,
  ) {}

  async getLesson(name: string): Promise<Lesson> {
    return this.lessonRepository.findOne({ name })
  }

  async createLesson(name, startDate, endDate): Promise<Lesson> {
    const lesson = this.lessonRepository.create({
      id: uuid,
      name,
      startDate,
      endDate
    })

    return this.lessonRepository.save(lesson)
  }
}
