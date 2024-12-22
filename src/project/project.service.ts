import { Injectable } from '@nestjs/common';
import { Project } from './dtos/project.dto';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { CreateProjectDto } from './dtos/create-project.dto';

@Injectable()
export class ProjectService {
  constructor(
    @InjectModel(Project.name) private projectModel: Model<Project>,
  ) {}

  async getAllProjects(): Promise<Project[]> {
    let projects = await this.projectModel.find().exec();

    console.log(projects);
    return this.projectModel.find().exec();
  }

  async createProject(createProjectDto: CreateProjectDto) {
    let project = new this.projectModel(createProjectDto);
    return await project.save();
  }

  async updateProject(createProjectDto: CreateProjectDto) {
    const result = await this.projectModel.updateOne(
      { _id: createProjectDto.id }, // filter: Find the user by _id
      { $set: { ...createProjectDto } }, // update: Set new values for the name and age
    );
    return result;
  }

  async getProjectById(id: string): Promise<Project> {
    let project = await this.projectModel.findById(id).exec();
    return project;
  }
}
