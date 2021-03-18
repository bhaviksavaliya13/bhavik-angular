import { Component, OnInit } from '@angular/core';
import { MenuItemModel } from 'src/app/main/main-sidebar/menu-item/menu-item.model';
import { appRoutingURL } from '../../configs/app-routing-url.config';
import { RoutingUrlService } from '../../services/routing-url.service';

@Component({
  selector: 'app-portal',
  templateUrl: './portal.component.html',
  styleUrls: ['./portal.component.css'],
  providers: [RoutingUrlService],
})
export class PortalComponent implements OnInit {
  menuItems: MenuItemModel[];

  //LoaderService is for the spinner
  constructor(private routingurlService: RoutingUrlService) {}

  ngOnInit() {
    this.createMenu();
  }

  private createMenu() {
    this.menuItems = [
      {
        title: 'Dashboard',
        icon: 'nav-icon fas fa-tachometer-alt',
        redirectUrl: this.routingurlService.merge(
          appRoutingURL.PORTAL_PAGE,
          appRoutingURL.DASHBOARD_PAGE
        ),
      },
      {
        title: 'Customer',
        icon: 'nav-icon fas fa-user',
        redirectUrl: this.routingurlService.merge(
          appRoutingURL.PORTAL_PAGE,
          appRoutingURL.CUSTOMER_PAGE,
          appRoutingURL.CUSTOMER_OVERVIEW
        ),
      },
      {
        title: 'Report',
        icon: 'nav-icon fas fa-file',
        redirectUrl: null,
        subMenuItems: [
          {
            title: 'Payment Report',
            icon: 'nav-icon fas fa--circle-o',
            redirectUrl: this.routingurlService.merge(
              appRoutingURL.PORTAL_PAGE,
              appRoutingURL.REPORT_PAGE,
              appRoutingURL.PAYMENT_REPORT_PAGE
            ),
          },
        ],
      },
    ];
  }
}
