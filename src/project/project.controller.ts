import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { ProjectService } from './project.service';
import { CreateProjectDto } from './dtos/create-project.dto';

@Controller('project')
export class ProjectController {
  constructor(private readonly projectService: ProjectService) {}

  @Get()
  async getAllProjects() {
    let projects = await this.projectService.getAllProjects();
    console.log(projects);
    return projects;
  }

  @Post()
  async createProject(@Body() createProjectDto: CreateProjectDto) {
    let project = await this.projectService.createProject(createProjectDto);
    return project;
  }
  @Get(':id')
  async getProject(@Param('id') id: string) {
    let project = await this.projectService.getProjectById(id);
    console.log(project);
    return project;
  }

  @Put()
  async updateProject(@Body() createProjectDto: CreateProjectDto) {
    let project = await this.projectService.updateProject(createProjectDto);
    return project;
  }
}
