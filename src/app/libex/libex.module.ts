import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShellService } from './services/shell.service';
import { ProductModelsComponent } from './product-models/product-models.component';
import { ProductRestructuringComponent } from './product-restructuring/product-restructuring.component';
import { DevelopmentRoadmapComponent } from './development-roadmap/development-roadmap.component';
import { ArchitectureComponent } from './architecture/architecture.component';
import { EcosystemComponent } from './ecosystem/ecosystem.component';
import { GemsDataComponent } from './gems-data/gems-data.component';
import { GemsOverviewComponent } from './gems-overview/gems-overview.component';
import { CustomerValuePropositionComponent } from './customer-value-proposition/customer-value-proposition.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ProductModelsComponent, ProductRestructuringComponent, DevelopmentRoadmapComponent, ArchitectureComponent, EcosystemComponent, GemsDataComponent, GemsOverviewComponent, CustomerValuePropositionComponent],
  providers: []
})
export class LibexModule { 
  static forRoot() {
    return {
      ngModule: LibexModule,
      providers: [ ShellService ]
    }
  }
}
