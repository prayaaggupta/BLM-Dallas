import { Component, OnInit } from '@angular/core';
import { AfterViewInit, ViewChild, ElementRef } from 
'@angular/core';
import { BlmMapService } from '../blm-map.service';
import {Location} from '../location.mode';

@Component({
  selector: 'app-blm-map',
  templateUrl: './blm-map.component.html',
  styleUrls: ['./blm-map.component.css']
})
export class BlmMapComponent implements OnInit {  
  constructor(private locationApi: BlmMapService) { }
  
  @ViewChild("mapContainer", { static: false }) gmap: ElementRef;
  map: google.maps.Map;
  location: Location;
  mapOptions: google.maps.MapOptions;
  ngOnInit(): void {
    this.locationApi.getLocation().subscribe(data => {
      this.location = data;
      console.log(data);
      this.mapOptions = {
        center: new google.maps.LatLng(this.location.latitude, this.location.longitude),
        zoom: 12,
      };
    })

  }
  markers = [
    {
      position: new google.maps.LatLng(32.654559,-96.884337),
      map: this.map,
      title: '<div id="content">' +
      '<div id="siteNotice">' +
      "</div>" +
      '<h1 id="firstHeading" class="firstHeading">4th Quarter Sports Bar</h1>' +
      '<div id="bodyContent">' +
      "<p>Type of Business: Restaurant/Bar</p>" +
      "<p>Address: 7460 S Westmoreland Rd, Dallas, TX 75237</p>" +
      '<p><a href="https://www.yelp.com/biz/4th-quarter-sports-bar-san-antonio">' +
      "Link to Business Website</a> " +
      "</p>" +
      "</div>" +
      "</div>"
    },
    {
      position: new google.maps.LatLng(32.737536,-97.095235),
      map: this.map,
      title: '<div id="content">' +
      '<div id="siteNotice">' +
      "</div>" +
      '<h1 id="firstHeading" class="firstHeading">A National Auto Body & Paint</h1>' +
      '<div id="bodyContent">' +
      "<p>Type of Business: Automotive</p>" +
      "<p>Address: 1016 Harrison Ave, Arlington, TX 76011</p>" +
      '<p><a href="https://anationalautobody.com">' +
      "Link to Business Website</a> " +
      "</p>" +
      "</div>" +
      "</div>"
    },
  
 
 {
      position: new google.maps.LatLng(32.726415,-96.78638),
      map: this.map,
      title: '<div id="content">' +
      '<div id="siteNotice">' +
      "</div>" +
      '<h1 id="firstHeading" class="firstHeading">A Taste of Way & Catering</h1>' +
      '<div id="bodyContent">' +
      "<p>Type of Business: Restaurant</p>" +
      "<p>Address: 2949 E. Kiest Blvd., Dallas, TX 75216</p>" +
      '<p><a href="https://a-taste-of-ways-catering.business.site/">' +
      "Link to Business Website</a> " +
      "</p>" +
      "</div>" +
      "</div>"
    },
  
 
 {
      position: new google.maps.LatLng(32.810434,-96.77046),
      map: this.map,
      title: '<div id="content">' +
      '<div id="siteNotice">' +
      "</div>" +
      '<h1 id="firstHeading" class="firstHeading">A Tribe Called Sprinters</h1>' +
      '<div id="bodyContent">' +
      "<p>Type of Business: Services</p>" +
      "<p>Address: 1605 Greenville Ave, Dallas, TX 75206, 4141 Spring Valley Rd, Addison, TX 75001</p>" +
      '<p><a href="https://tribecalledsprinters.com/">' +
      "Link to Business Website</a> " +
      "</p>" +
      "</div>" +
      "</div>"
    },
    {
      position: new google.maps.LatLng(32.963379,-96.748866),
      map: this.map,
      title: '<div id="content">' +
      '<div id="siteNotice">' +
      "</div>" +
      '<h1 id="firstHeading" class="firstHeading">Abi Lounge</h1>' +
      '<div id="bodyContent">' +
      "<p>Type of Business: Bar/Nightclub</p>" +
      "<p>Address: 810 W. Arapaho Rd #62, Richardson, TX, 75080</p>" +
      '<p><a href="https://abihookahlounge.business.site/">' +
      "Link to Business Website</a> " +
      "</p>" +
      "</div>" +
      "</div>"
    },
  
 
 {
      position: new google.maps.LatLng(32.779222,-96.762956),
      map: this.map,
      title: '<div id="content">' +
      '<div id="siteNotice">' +
      "</div>" +
      '<h1 id="firstHeading" class="firstHeading">African American Museum</h1>' +
      '<div id="bodyContent">' +
      "<p>Type of Business: Museum</p>" +
      "<p>Address: 3536 Grand Avenue, Dallas, Texas 75210</p>" +
      '<p><a href="http://aamdallas.org/">' +
      "Link to Business Website</a> " +
      "</p>" +
      "</div>" +
      "</div>"
    },
  
 
 {
      position: new google.maps.LatLng(32.941095,-96.770508),
      map: this.map,
      title: '<div id="content">' +
      '<div id="siteNotice">' +
      "</div>" +
      '<h1 id="firstHeading" class="firstHeading">Aldeez Carribean Restaurant</h1>' +
      '<div id="bodyContent">' +
      "<p>Type of Business: Restaurant</p>" +
      "<p>Address: 7879 Spring Valley Rd #115, Dallas, TX 75254</p>" +
      '<p><a href="http://aldeez.imenutogo.com">' +
      "Link to Business Website</a> " +
      "</p>" +
      "</div>" +
      "</div>"
    },
  
 
 {
      position: new google.maps.LatLng(32.766612,-96.765867),
      map: this.map,
      title: '<div id="content">' +
      '<div id="siteNotice">' +
      "</div>" +
      '<h1 id="firstHeading" class="firstHeading">Aunt Irene Kitchen</h1>' +
      '<div id="bodyContent">' +
      "<p>Type of Business: Restaurant</p>" +
      "<p>Address: 3309 S Malcom X Blvd, Dallas, TX 75215</p>" +
      '<p><a href="http://aldeez.imenutogo.comauntirene.com">' +
      "Link to Business Website</a> " +
      "</p>" +
      "</div>" +
      "</div>"
    },
  
 
 {
      position: new google.maps.LatLng(32.782604,-96.804952),
      map: this.map,
      title: '<div id="content">' +
      '<div id="siteNotice">' +
      "</div>" +
      '<h1 id="firstHeading" class="firstHeading">Avery’s Savory Popcorn</h1>' +
      '<div id="bodyContent">' +
      "<p>Type of Business: Snacks</p>" +
      "<p>Address: 1001 Ross Avenue, Suite 102, Dallas, Texas 75202</p>" +
      '<p><a href="http://savorypopcorn.com">' +
      "Link to Business Website</a> " +
      "</p>" +
      "</div>" +
      "</div>"
    },
  
 
    {
      position: new google.maps.LatLng(32.76787,-96.78983),
      map: this.map,
      title: '<div id="content">' +
      '<div id="siteNotice">' +
      "</div>" +
      '<h1 id="firstHeading" class="firstHeading">Baby Back Shak</h1>' +
      '<div id="bodyContent">' +
      "<p>Type of Business: Restaurant</p>" +
      "<p>Address: 1800 S Akard St, Dallas, TX 75215</p>" +
      '<p><a href="http://babybackshak.com">' +
      "Link to Business Website</a> " +
      "</p>" +
      "</div>" +
      "</div>"
    },
    {
      position: new google.maps.LatLng(32.828651,-96.745951),
      map: this.map,
      title: '<div id="content">' +
      '<div id="siteNotice">' +
      "</div>" +
      '<h1 id="firstHeading" class="firstHeading">Baker’s Ribs</h1>' +
      '<div id="bodyContent">' +
      "<p>Type of Business: Restaurant</p>" +
      "<p>Address: 6516 Northwest Hwy, Dallas, TX 75214</p>" +
      '<p><a href="http://www.bakersribs.com/">' +
      "Link to Business Website</a> " +
      "</p>" +
      "</div>" +
      "</div>"
    },
  
 
 {
      position: new google.maps.LatLng(32.73242,-97.791156),
      map: this.map,
      title: '<div id="content">' +
      '<div id="siteNotice">' +
      "</div>" +
      '<h1 id="firstHeading" class="firstHeading">Baker’s Ribs</h1>' +
      '<div id="bodyContent">' +
      "<p>Type of Business: Restaurant</p>" +
      "<p>Address: 1921 S. Main Street, Weatherford, TX</p>" +
      '<p><a href="http://www.bakersribs.com/">' +
      "Link to Business Website</a> " +
      "</p>" +
      "</div>" +
      "</div>"
    },
  
 
 {
      position: new google.maps.LatLng(33.045423,-96.176798),
      map: this.map,
      title: '<div id="content">' +
      '<div id="siteNotice">' +
      "</div>" +
      '<h1 id="firstHeading" class="firstHeading">Baker’s Ribs</h1>' +
      '<div id="bodyContent">' +
      "<p>Type of Business: Restaurant</p>" +
      "<p>Address: 2711 West I-30, Greenville, TX</p>" +
      '<p><a href="http://www.bakersribs.com/">' +
      "Link to Business Website</a> " +
      "</p>" +
      "</div>" +
      "</div>"
    },
  
 
 {
      position: new google.maps.LatLng(32.583096,-95.868943),
      map: this.map,
      title: '<div id="content">' +
      '<div id="siteNotice">' +
      "</div>" +
      '<h1 id="firstHeading" class="firstHeading">Baker’s Ribs</h1>' +
      '<div id="bodyContent">' +
      "<p>Type of Business: Restaurant</p>" +
      "<p>Address: 18089 I-20 Service Rd., Canton, TX</p>" +
      '<p><a href="http://www.bakersribs.com/">' +
      "Link to Business Website</a> " +
      "</p>" +
      "</div>" +
      "</div>"
    },
  
 
 {
      position: new google.maps.LatLng(32.83982,-96.594321),
      map: this.map,
      title: '<div id="content">' +
      '<div id="siteNotice">' +
      "</div>" +
      '<h1 id="firstHeading" class="firstHeading">Baker’s Ribs</h1>' +
      '<div id="bodyContent">' +
      "<p>Type of Business: Restaurant</p>" +
      "<p>Address: 488 W Interstate 30, Garland, TX 75043</p>" +
      '<p><a href="http://www.bakersribs.com/">' +
      "Link to Business Website</a> " +
      "</p>" +
      "</div>" +
      "</div>"
    },
    {
      position: new google.maps.LatLng(32.795114,-96.611321),
      map: this.map,
      title: '<div id="content">' +
      '<div id="siteNotice">' +
      "</div>" +
      '<h1 id="firstHeading" class="firstHeading">Baker’s Ribs</h1>' +
      '<div id="bodyContent">' +
      "<p>Type of Business: Restaurant</p>" +
      "<p>Address: 2202 N Galloway Ave, Mesquite, TX 75150</p>" +
      '<p><a href="http://www.bakersribs.com/">' +
      "Link to Business Website</a> " +
      "</p>" +
      "</div>" +
      "</div>"
    },
    {
      position: new google.maps.LatLng(32.705217,-97.097009),
      map: this.map,
      title: '<div id="content">' +
      '<div id="siteNotice">' +
      "</div>" +
      '<h1 id="firstHeading" class="firstHeading">Bankem Printing</h1>' +
      '<div id="bodyContent">' +
      "<p>Type of Business: Printing</p>" +
      "<p>Address: 2357 S Collins St, Arlington, TX 76014</p>" +
      '<p><a href="http://bankemprinting.com">' +
      "Link to Business Website</a> " +
      "</p>" +
      "</div>" +
      "</div>"
    },
    {
      position: new google.maps.LatLng(32.655352,-97.194384),
      map: this.map,
      title: '<div id="content">' +
      '<div id="siteNotice">' +
      "</div>" +
      '<h1 id="firstHeading" class="firstHeading">BB Crowns On Wheels</h1>' +
      '<div id="bodyContent">' +
      "<p>Type of Business: Restaurant</p>" +
      "<p>Address: Mobile Service-6900 New York Ave, Arlington, TX 76002</p>" +
      '<p><a href="https://www.yelp.com/biz/b-and-b-crowns-on-the-go-arlington">' +
      "Link to Business Website</a> " +
      "</p>" +
      "</div>" +
      "</div>"
    },
    {
      position: new google.maps.LatLng(32.559804,-96.824532),
      map: this.map,
      title: '<div id="content">' +
      '<div id="siteNotice">' +
      "</div>" +
      '<h1 id="firstHeading" class="firstHeading">Bear Creek Bbq</h1>' +
      '<div id="bodyContent">' +
      "<p>Type of Business: Restaurant</p>" +
      "<p>Address: 1308 E Bear Creek Rd Glenn Heights, Texas</p>" +
      '<p><a href="http://www.bearcreekbarbecue.com">' +
      "Link to Business Website</a> " +
      "</p>" +
      "</div>" +
      "</div>"
    },
    {
      position: new google.maps.LatLng(32.859571,-97.238989),
      map: this.map,
      title: '<div id="content">' +
      '<div id="siteNotice">' +
      "</div>" +
      '<h1 id="firstHeading" class="firstHeading">Berry Best BBQ</h1>' +
      '<div id="bodyContent">' +
      "<p>Type of Business: Restaurant</p>" +
      "<p>Address: 6257 Rufe Snow Drive Watauga, Texas 76148</p>" +
      '<p><a href="https://berrybestbbq.com/">' +
      "Link to Business Website</a> " +
      "</p>" +
      "</div>" +
      "</div>"
    },
    {
      position: new google.maps.LatLng(32.859571,-97.238989),
      map: this.map,
      title: '<div id="content">' +
      '<div id="siteNotice">' +
      "</div>" +
      '<h1 id="firstHeading" class="firstHeading">Berry Best BBQ</h1>' +
      '<div id="bodyContent">' +
      "<p>Type of Business: Restaurant</p>" +
      "<p>Address: 6257 Rufe Snow Drive, Watauga, Texas 76148</p>" +
      '<p><a href="https://berrybestbbq.com/">' +
      "Link to Business Website</a> " +
      "</p>" +
      "</div>" +
      "</div>"
    },
    {
      position: new google.maps.LatLng(32.929067,-96.802758),
      map: this.map,
      title: '<div id="content">' +
      '<div id="siteNotice">' +
      "</div>" +
      '<h1 id="firstHeading" class="firstHeading">Big Tony’s West Philly</h1>' +
      '<div id="bodyContent">' +
      "<p>Type of Business: Restaurant</p>" +
      "<p>Address: 13378 Preston Rd. Dallas, TX 75240</p>" +
      '<p><a href="https://www.bigtonyswestphillycheesesteaks.com/">' +
      "Link to Business Website</a> " +
      "</p>" +
      "</div>" +
      "</div>"
    },
    {
      position: new google.maps.LatLng(33.088546,-96.671142),
      map: this.map,
      title: '<div id="content">' +
      '<div id="siteNotice">' +
      "</div>" +
      '<h1 id="firstHeading" class="firstHeading">Big Tony’s West Philly</h1>' +
      '<div id="bodyContent">' +
      "<p>Type of Business: Restaurant</p>" +
      "<p>Address: 740 S. Greenville Ave., 40 Allen, TX 75002</p>" +
      '<p><a href="https://www.bigtonyswestphillycheesesteaks.com/">' +
      "Link to Business Website</a> " +
      "</p>" +
      "</div>" +
      "</div>"
    },
  
 
 {
      position: new google.maps.LatLng(32.630618,-96.857913),
      map: this.map,
      title: '<div id="content">' +
      '<div id="siteNotice">' +
      "</div>" +
      '<h1 id="firstHeading" class="firstHeading">Big Tony’s West Philly</h1>' +
      '<div id="bodyContent">' +
      "<p>Type of Business: Restaurant</p>" +
      "<p>Address: 2021 N. Hampton Rd. DeSoto, TX 75115</p>" +
      '<p><a href="https://www.bigtonyswestphillycheesesteaks.com/">' +
      "Link to Business Website</a> " +
      "</p>" +
      "</div>" +
      "</div>"
    },
  
 
 {
      position: new google.maps.LatLng(32.730059,-97.279402),
      map: this.map,
      title: '<div id="content">' +
      '<div id="siteNotice">' +
      "</div>" +
      '<h1 id="firstHeading" class="firstHeading">Black Coffee</h1>' +
      '<div id="bodyContent">' +
      "<p>Type of Business: Drink Shop</p>" +
      "<p>Address: 1417 Vaughn Blvd, Fort Worth, TX 76112</p>" +
      '<p><a href="https://www.blackcoffeefw.com/">' +
      "Link to Business Website</a> " +
      "</p>" +
      "</div>" +
      "</div>"
    },
  
 
 {
      position: new google.maps.LatLng(32.686279,-96.911121),
      map: this.map,
      title: '<div id="content">' +
      '<div id="siteNotice">' +
      "</div>" +
      '<h1 id="firstHeading" class="firstHeading">Black Pearls Beauty</h1>' +
      '<div id="bodyContent">' +
      "<p>Type of Business: Retail</p>" +
      "<p>Address: 4811 Duncanville Rd #1305, Dallas, TX 75236</p>" +
      '<p><a href="https://blackpearlsbeauty.com">' +
      "Link to Business Website</a> " +
      "</p>" +
      "</div>" +
      "</div>"
    },
 
    {
      position: new google.maps.LatLng(32.823797,-96.867486),
      map: this.map,
      title: '<div id="content">' +
      '<div id="siteNotice">' +
      "</div>" +
      '<h1 id="firstHeading" class="firstHeading">Blackburn Woolfolk Dermatology, PLLC</h1>' +
      '<div id="bodyContent">' +
      "<p>Type of Business: Dermatology</p>" +
      "<p>Address: 8200 Brookriver Dr n705, Dallas, TX 75247</p>" +
      '<p><a href="https://bwderm.com">' +
      "Link to Business Website</a> " +
      "</p>" +
      "</div>" +
      "</div>"
    },
  
 
 {
      position: new google.maps.LatLng(32.815585,-96.809281),
      map: this.map,
      title: '<div id="content">' +
      '<div id="siteNotice">' +
      "</div>" +
      '<h1 id="firstHeading" class="firstHeading">Blended Beauti</h1>' +
      '<div id="bodyContent">' +
      "<p>Type of Business: Salons & Spas</p>" +
      "<p>Address: 4140 Lemmon Ave Ste 15, Dallas, TX 75219</p>" +
      '<p><a href="https://styleseat.com/blendedbeauti">' +
      "Link to Business Website</a> " +
      "</p>" +
      "</div>" +
      "</div>"
    },
  
 
 {
      position: new google.maps.LatLng(32.625485,-97.114759),
      map: this.map,
      title: '<div id="content">' +
      '<div id="siteNotice">' +
      "</div>" +
      '<h1 id="firstHeading" class="firstHeading">Blu Ice Daiquiri</h1>' +
      '<div id="bodyContent">' +
      "<p>Type of Business: Restaurant</p>" +
      "<p>Address: 7401 Matlock Rd, Suite 115 Arlington, Texas</p>" +
      '<p><a href="https://www.yelp.com/biz/blu-ice-daiquiris-arlington">' +
      "Link to Business Website</a> " +
      "</p>" +
      "</div>" +
      "</div>"
    },
  
 
 {
      position: new google.maps.LatLng(32.763214,-96.747517),
      map: this.map,
      title: '<div id="content">' +
      '<div id="siteNotice">' +
      "</div>" +
      '<h1 id="firstHeading" class="firstHeading">Breakfast Bar</h1>' +
      '<div id="bodyContent">' +
      "<p>Type of Business: Restaurant</p>" +
      "<p>Address: 4507 S. 2nd Avenue Dallas, Texas 75210</p>" +
      '<p><a href="https://www.yelp.com/biz/the-breakfast-bar-dallas-3">' +
      "Link to Business Website</a> " +
      "</p>" +
      "</div>" +
      "</div>"
    },
    {
      position: new google.maps.LatLng(32.897041,-96.72019),
      map: this.map,
      title: '<div id="content">' +
      '<div id="siteNotice">' +
      "</div>" +
      '<h1 id="firstHeading" class="firstHeading">Brickhouse Burgers & Shakes</h1>' +
      '<div id="bodyContent">' +
      "<p>Type of Business: Restaurant</p>" +
      "<p>Address: 9090 SKILLMAN ST #174A, DALLAS, TX 75243</p>" +
      '<p><a href="https://brickhouseburger.com">' +
      "Link to Business Website</a> " +
      "</p>" +
      "</div>" +
      "</div>"
    },
  
 
 {
      position: new google.maps.LatLng(32.993733,-97.065013),
      map: this.map,
      title: '<div id="content">' +
      '<div id="siteNotice">' +
      "</div>" +
      '<h1 id="firstHeading" class="firstHeading">Brieslys Boutique</h1>' +
      '<div id="bodyContent">' +
      "<p>Type of Business: Retail</p>" +
      "<p>Address: 2451 Lakeside Parkway, Ste. 160, Flower Mound, TX, 75022</p>" +
      '<p><a href="https://www.brieslysboutique.com/">' +
      "Link to Business Website</a> " +
      "</p>" +
      "</div>" +
      "</div>"
    },
  
 
 {
      position: new google.maps.LatLng(32.729474,-97.374127),
      map: this.map,
      title: '<div id="content">' +
      '<div id="siteNotice">' +
      "</div>" +
      '<h1 id="firstHeading" class="firstHeading">Brōōha</h1>' +
      '<div id="bodyContent">' +
      "<p>Type of Business: Maker</p>" +
      "<p>Address: 3930 W. Vickery, Fort Worth, TX 76107</p>" +
      '<p><a href="https://www.fortworth.com/listings/brooha/9214/">' +
      "Link to Business Website</a> " +
      "</p>" +
      "</div>" +
      "</div>"
    },
  
 
 {
      position: new google.maps.LatLng(41.720518,-87.735465),
      map: this.map,
      title: '<div id="content">' +
      '<div id="siteNotice">' +
      "</div>" +
      '<h1 id="firstHeading" class="firstHeading">Brow x Monica</h1>' +
      '<div id="bodyContent">' +
      "<p>Type of Business: Retail</p>" +
      "<p>Address: 4540 W 95th St. Oak Lawn, IL 60453</p>" +
      '<p><a href="https://browsbymonica.com">' +
      "Link to Business Website</a> " +
      "</p>" +
      "</div>" +
      "</div>"
    },
  
 
 {
      position: new google.maps.LatLng(32.606342,-96.841871),
      map: this.map,
      title: '<div id="content">' +
      '<div id="siteNotice">' +
      "</div>" +
      '<h1 id="firstHeading" class="firstHeading">Bulleez DFW</h1>' +
      '<div id="bodyContent">' +
      "<p>Type of Business: Restaurant</p>" +
      "<p>Address: 901 N POLK STREET #330 DESOTO TX 75115</p>" +
      '<p><a href="https://www.bulleezdfw.com/">' +
      "Link to Business Website</a> " +
      "</p>" +
      "</div>" +
      "</div>"
    },
  
 
 {
      position: new google.maps.LatLng(32.936008,-96.838169),
      map: this.map,
      title: '<div id="content">' +
      '<div id="siteNotice">' +
      "</div>" +
      '<h1 id="firstHeading" class="firstHeading">Bundles Luxury Hair Company (Hair)</h1>' +
      '<div id="bodyContent">' +
      "<p>Type of Business: Hair Salon</p>" +
      "<p>Address: 13740 Midway Rd Suite 524, Farmers Branch, TX 75244</p>" +
      '<p><a href="https://bundlesluxuryhair.com/">' +
      "Link to Business Website</a> " +
      "</p>" +
      "</div>" +
      "</div>"
    },
    {
      position: new google.maps.LatLng(32.781981,-96.80663),
      map: this.map,
      title: '<div id="content">' +
      '<div id="siteNotice">' +
      "</div>" +
      '<h1 id="firstHeading" class="firstHeading">Burger IM</h1>' +
      '<div id="bodyContent">' +
      "<p>Type of Business: Restaurant</p>" +
      "<p>Address: 1722 N. Market St, Dallas, TX 75202</p>" +
      '<p><a href="https://burgerim.com">' +
      "Link to Business Website</a> " +
      "</p>" +
      "</div>" +
      "</div>"
    },
  
 
 {
      position: new google.maps.LatLng(32.731685,-97.390711),
      map: this.map,
      title: '<div id="content">' +
      '<div id="siteNotice">' +
      "</div>" +
      '<h1 id="firstHeading" class="firstHeading">Buttons</h1>' +
      '<div id="bodyContent">' +
      "<p>Type of Business: Restaurant</p>" +
      "<p>Address: 4701 West Fwy, Fort Worth, TX 76107</p>" +
      '<p><a href="https://buttonsdfw.com">' +
      "Link to Business Website</a> " +
      "</p>" +
      "</div>" +
      "</div>"
    },
  
 
 {
      position: new google.maps.LatLng(32.77939,-96.828337),
      map: this.map,
      title: '<div id="content">' +
      '<div id="siteNotice">' +
      "</div>" +
      '<h1 id="firstHeading" class="firstHeading">Cake Bar</h1>' +
      '<div id="bodyContent">' +
      "<p>Type of Business: Bakery</p>" +
      "<p>Address: 3011 Gulden Lane, Suite 117 Dallas, Texas 75212</p>" +
      '<p><a href="https://www.cakebardallas.com/cakes/">' +
      "Link to Business Website</a> " +
      "</p>" +
      "</div>" +
      "</div>"
    },
  
 
 {
      position: new google.maps.LatLng(32.738821,-97.33717),
      map: this.map,
      title: '<div id="content">' +
      '<div id="siteNotice">' +
      "</div>" +
      '<h1 id="firstHeading" class="firstHeading">Carpenters Cafe and Catering</h1>' +
      '<div id="bodyContent">' +
      "<p>Type of Business: Restaurant</p>" +
      "<p>Address: 1116 Pennsylvania Ave, Fort Worth, TX 76104</p>" +
      '<p><a href="https://carpscafe.net/">' +
      "Link to Business Website</a> " +
      "</p>" +
      "</div>" +
      "</div>"
    },
  
 
 {
      position: new google.maps.LatLng(32.592657,-96.756057),
      map: this.map,
      title: '<div id="content">' +
      '<div id="siteNotice">' +
      "</div>" +
      '<h1 id="firstHeading" class="firstHeading">Casserole Soul Cafe</h1>' +
      '<div id="bodyContent">' +
      "<p>Type of Business: Restaurant</p>" +
      "<p>Address: 133 Historic Town Square, Lancaster, TX 75146</p>" +
      '<p><a href="http://casserolesoulcafe.com/">' +
      "Link to Business Website</a> " +
      "</p>" +
      "</div>" +
      "</div>"
    },
  
 
 {
      position: new google.maps.LatLng(32.691163,-96.814552),
      map: this.map,
      title: '<div id="content">' +
      '<div id="siteNotice">' +
      "</div>" +
      '<h1 id="firstHeading" class="firstHeading">Catfish Floyd’s</h1>' +
      '<div id="bodyContent">' +
      "<p>Type of Business: Restaurant</p>" +
      "<p>Address: 710 Ann Arbor Ave, Dallas, TX 75216</p>" +
      '<p><a href="https://www.facebook.com/pages/Catfish-Floyds/115419631814400">' +
      "Link to Business Website</a> " +
      "</p>" +
      "</div>" +
      "</div>"
    },
  
 
 {
      position: new google.maps.LatLng(32.685516,-97.130466),
      map: this.map,
      title: '<div id="content">' +
      '<div id="siteNotice">' +
      "</div>" +
      '<h1 id="firstHeading" class="firstHeading">Ceeluxurious - Cecee</h1>' +
      '<div id="bodyContent">' +
      "<p>Type of Business: Hair Salon</p>" +
      "<p>Address: 3701 S Cooper St Suite 11, Arlington, TX 76015</p>" +
      '<p><a href="https://ceeluxurious.as.me/schedule.php">' +
      "Link to Business Website</a> " +
      "</p>" +
      "</div>" +
      "</div>"
    },
  
    {
      position: new google.maps.LatLng(32.817181,-96.802176),
      map: this.map,
      title: '<div id="content">' +
      '<div id="siteNotice">' +
      "</div>" +
      '<h1 id="firstHeading" class="firstHeading">Chocolate Secrets</h1>' +
      '<div id="bodyContent">' +
      "<p>Type of Business: Chocolatier</p>" +
      "<p>Address: 3926 OAK LAWN AVENUE DALLAS, TX 75219</p>" +
      '<p><a href="https://mychocolatesecrets.com">' +
      "Link to Business Website</a> " +
      "</p>" +
      "</div>" +
      "</div>"
    },
  
 
 {
      position: new google.maps.LatLng(32.912858,-96.746082),
      map: this.map,
      title: '<div id="content">' +
      '<div id="siteNotice">' +
      "</div>" +
      '<h1 id="firstHeading" class="firstHeading">City Cafe & Bakery</h1>' +
      '<div id="bodyContent">' +
      "<p>Type of Business: Restaurant, Bakery</p>" +
      "<p>Address: 12101 Greenville Ave #103, Dallas, TX 75243</p>" +
      '<p><a href="https://citycafenbakery.com">' +
      "Link to Business Website</a> " +
      "</p>" +
      "</div>" +
      "</div>"
    },
 
 {
      position: new google.maps.LatLng(33.155562,-96.839381),
      map: this.map,
      title: '<div id="content">' +
      '<div id="siteNotice">' +
      "</div>" +
      '<h1 id="firstHeading" class="firstHeading">Cookie Society</h1>' +
      '<div id="bodyContent">' +
      "<p>Type of Business: Bakery</p>" +
      "<p>Address: 9320 Dallas Parkway, Suite 160 Frisco, Texas 75033</p>" +
      '<p><a href="">' +
      "Link to Business Website</a> " +
      "</p>" +
      "</div>" +
      "</div>"
    },
  
 
 {
      position: new google.maps.LatLng(32.711769,-96.687927),
      map: this.map,
      title: '<div id="content">' +
      '<div id="siteNotice">' +
      "</div>" +
      '<h1 id="firstHeading" class="firstHeading">Crazy Brothers</h1>' +
      '<div id="bodyContent">' +
      "<p>Type of Business: Restaurant</p>" +
      "<p>Address: 7812 Great Trinity Forest Way Suite 300 Dallas, Texas 75217</p>" +
      '<p><a href="https://us.orderspoon.com/crazy-brothers">' +
      "Link to Business Website</a> " +
      "</p>" +
      "</div>" +
      "</div>"
    },
  
 
 {
      position: new google.maps.LatLng(32.654394,-96.782502),
      map: this.map,
      title: '<div id="content">' +
      '<div id="siteNotice">' +
      "</div>" +
      '<h1 id="firstHeading" class="firstHeading">Cream N Things</h1>' +
      '<div id="bodyContent">' +
      "<p>Type of Business: Restaurant</p>" +
      "<p>Address: 7536 S. Lancaster Rd. Dallas, Texas 75241</p>" +
      '<p><a href="">' +
      "Link to Business Website</a> " +
      "</p>" +
      "</div>" +
      "</div>"
    },
  
 
 {
      position: new google.maps.LatLng(32.687413,-97.13204),
      map: this.map,
      title: '<div id="content">' +
      '<div id="siteNotice">' +
      "</div>" +
      '<h1 id="firstHeading" class="firstHeading">Culture Nail Bar</h1>' +
      '<div id="bodyContent">' +
      "<p>Type of Business: Nail Salon</p>" +
      "<p>Address: 3610 S Cooper St Suite 106, Arlington, TX 76015</p>" +
      '<p><a href="https://www.culturenailbar.com/">' +
      "Link to Business Website</a> " +
      "</p>" +
      "</div>" +
      "</div>"
    },
  
 
 {
      position: new google.maps.LatLng(32.762557,-96.760977),
      map: this.map,
      title: '<div id="content">' +
      '<div id="siteNotice">' +
      "</div>" +
      '<h1 id="firstHeading" class="firstHeading">D&L Shaved Ice</h1>' +
      '<div id="bodyContent">' +
      "<p>Type of Business: Drink Shop</p>" +
      "<p>Address: 3741 S Malcolm X Blvd, Dallas, TX 75215</p>" +
      '<p><a href="">' +
      "Link to Business Website</a> " +
      "</p>" +
      "</div>" +
      "</div>"
    },
  
 
 {
      position: new google.maps.LatLng(32.792239,-96.87416),
      map: this.map,
      title: '<div id="content">' +
      '<div id="siteNotice">' +
      "</div>" +
      '<h1 id="firstHeading" class="firstHeading">Da Munchies</h1>' +
      '<div id="bodyContent">' +
      "<p>Type of Business: Restaurant</p>" +
      "<p>Address: 4121 North Westmoreland Road Dallas, Texas 75212</p>" +
      '<p><a href="https://damunchiesdfw.com">' +
      "Link to Business Website</a> " +
      "</p>" +
      "</div>" +
      "</div>"
    },
  
 
 {
      position: new google.maps.LatLng(32.755556,-96.872497),
      map: this.map,
      title: '<div id="content">' +
      '<div id="siteNotice">' +
      "</div>" +
      '<h1 id="firstHeading" class="firstHeading">Daddy Macs Chicken</h1>' +
      '<div id="bodyContent">' +
      "<p>Type of Business: Restaurant</p>" +
      "<p>Address: 1050 N. Westmoreland Rd, Dallas, TX, 75211</p>" +
      '<p><a href="https://Daddymacschicken.com">' +
      "Link to Business Website</a> " +
      "</p>" +
      "</div>" +
      "</div>"
    },
  
 
 {
      position: new google.maps.LatLng(32.735051,-97.063809),
      map: this.map,
      title: '<div id="content">' +
      '<div id="siteNotice">' +
      "</div>" +
      '<h1 id="firstHeading" class="firstHeading">Daiquiri Depot Soul Food Grill</h1>' +
      '<div id="bodyContent">' +
      "<p>Type of Business: Restaurant</p>" +
      "<p>Address: 2544 E. Abram Ste 100 Arlington, Tx</p>" +
      '<p><a href="http://www.daiquiridepot.com/">' +
      "Link to Business Website</a> " +
      "</p>" +
      "</div>" +
      "</div>"
    },
  
 
 {
      position: new google.maps.LatLng(32.709788,-97.0127),
      map: this.map,
      title: '<div id="content">' +
      '<div id="siteNotice">' +
      "</div>" +
      '<h1 id="firstHeading" class="firstHeading">Daiquiri Shoppe</h1>' +
      '<div id="bodyContent">' +
      "<p>Type of Business: Beverages</p>" +
      "<p>Address: 684 W Pioneer Pkwy., Suite 100 Grand Prairie, Tx 75051</p>" +
      '<p><a href="https://thedaiquirishoppe.com">' +
      "Link to Business Website</a> " +
      "</p>" +
      "</div>" +
      "</div>"
    },
  
 
 {
      position: new google.maps.LatLng(32.991274,-96.941627),
      map: this.map,
      title: '<div id="content">' +
      '<div id="siteNotice">' +
      "</div>" +
      '<h1 id="firstHeading" class="firstHeading">Daiquiri Shoppe</h1>' +
      '<div id="bodyContent">' +
      "<p>Type of Business: Beverages</p>" +
      "<p>Address: 1837 W Frankford Rd., Suite 122 Carrollton, Tx 75007</p>" +
      '<p><a href="https://thedaiquirishoppe.com">' +
      "Link to Business Website</a> " +
      "</p>" +
      "</div>" +
      "</div>"
    },
  
 
 {
      position: new google.maps.LatLng(32.655834,-97.075715),
      map: this.map,
      title: '<div id="content">' +
      '<div id="siteNotice">' +
      "</div>" +
      '<h1 id="firstHeading" class="firstHeading">Damian’s Cajun Cafe</h1>' +
      '<div id="bodyContent">' +
      "<p>Type of Business: Restaurant</p>" +
      "<p>Address: 2001 SE Green Oaks Blvd, Ste. 190 Arlington, TX 76018</p>" +
      '<p><a href="https://damianscajun.com/">' +
      "Link to Business Website</a> " +
      "</p>" +
      "</div>" +
      "</div>"
    },
  
 
 {
      position: new google.maps.LatLng(32.743505,-97.329632),
      map: this.map,
      title: '<div id="content">' +
      '<div id="siteNotice">' +
      "</div>" +
      '<h1 id="firstHeading" class="firstHeading">Dannette Urban Oasis</h1>' +
      '<div id="bodyContent">' +
      "<p>Type of Business: Retail</p>" +
      "<p>Address: 101 S Jennings Ave #103, Fort Worth, TX 76104</p>" +
      '<p><a href="https://danettesurbanoasis.com/">' +
      "Link to Business Website</a> " +
      "</p>" +
      "</div>" +
      "</div>"
    },
  
 
 {
      position: new google.maps.LatLng(32.662982,-96.876911),
      map: this.map,
      title: '<div id="content">' +
      '<div id="siteNotice">' +
      "</div>" +
      '<h1 id="firstHeading" class="firstHeading">Daq and Mags Daiquiris</h1>' +
      '<div id="bodyContent">' +
      "<p>Type of Business: Restaurant</p>" +
      "<p>Address: 3431 W.Camp Wisdom Rd Dallas, Texas 75237</p>" +
      '<p><a href="">' +
      "Link to Business Website</a> " +
      "</p>" +
      "</div>" +
      "</div>"
    },
  
 
 {
      position: new google.maps.LatLng(32.700337,-96.763154),
      map: this.map,
      title: '<div id="content">' +
      '<div id="siteNotice">' +
      "</div>" +
      '<h1 id="firstHeading" class="firstHeading">Deans Smokin BBQ</h1>' +
      '<div id="bodyContent">' +
      "<p>Type of Business: Food Truck / Pop-Up</p>" +
      "<p>Address: Dallas Farmers Market 920 S. Harwood Dallas, Texas 75201</p>" +
      '<p><a href="http://www.justencaseddfw.com/">' +
      "Link to Business Website</a> " +
      "</p>" +
      "</div>" +
      "</div>"
    },
  
 
 {
      position: new google.maps.LatLng(32.912858,-96.746082),
      map: this.map,
      title: '<div id="content">' +
      '<div id="siteNotice">' +
      "</div>" +
      '<h1 id="firstHeading" class="firstHeading">Desta Desta Ethiopian Restaurant</h1>' +
      '<div id="bodyContent">' +
      "<p>Type of Business: Restaurant</p>" +
      "<p>Address: 12101 Greenville Ave ste 105 Dallas, Texas 75243</p>" +
      '<p><a href="">' +
      "Link to Business Website</a> " +
      "</p>" +
      "</div>" +
      "</div>"
    },
    {
      position: new google.maps.LatLng(32.71093,-97.019066),
      map: this.map,
      title: '<div id="content">' +
      '<div id="siteNotice">' +
      "</div>" +
      '<h1 id="firstHeading" class="firstHeading">Divine Grace Family Clinic</h1>' +
      '<div id="bodyContent">' +
      "<p>Type of Business: Services</p>" +
      "<p>Address: 2455 Robinson Road, Suite 100, Grand Prairie, TX 75051</p>" +
      '<p><a href="https://divinegraceclinic.com/">' +
      "Link to Business Website</a> " +
      "</p>" +
      "</div>" +
      "</div>"
    },
  
 
 {
      position: new google.maps.LatLng(32.738113,-97.393593),
      map: this.map,
      title: '<div id="content">' +
      '<div id="siteNotice">' +
      "</div>" +
      '<h1 id="firstHeading" class="firstHeading">Dough Boy Donuts</h1>' +
      '<div id="bodyContent">' +
      "<p>Type of Business: Bakery</p>" +
      "<p>Address: 4910 Camp Bowie Fort Worth, Texas 76107</p>" +
      '<p><a href="https://doughboydonutsdfw.com">' +
      "Link to Business Website</a> " +
      "</p>" +
      "</div>" +
      "</div>"
    },
  
 
 {
      position: new google.maps.LatLng(32.746217,-97.214848),
      map: this.map,
      title: '<div id="content">' +
      '<div id="siteNotice">' +
      "</div>" +
      '<h1 id="firstHeading" class="firstHeading">Dream Performance</h1>' +
      '<div id="bodyContent">' +
      "<p>Type of Business: Services</p>" +
      "<p>Address: 6707 Meadowbrook Drive, Fort Worth, TX 76112</p>" +
      '<p><a href="https://clients.mindbodyonline.com/asp/adm/adm_appt_search.asp?studioid=541885&fl=true&tabID=9">' +
      "Link to Business Website</a> " +
      "</p>" +
      "</div>" +
      "</div>"
    },
  
 
 {
      position: new google.maps.LatLng(32.729953,-97.408125),
      map: this.map,
      title: '<div id="content">' +
      '<div id="siteNotice">' +
      "</div>" +
      '<h1 id="firstHeading" class="firstHeading">Drew’s Place</h1>' +
      '<div id="bodyContent">' +
      "<p>Type of Business: Restaurant</p>" +
      "<p>Address: 5701 Curzon Ave Fort Worth, Texas 76107</p>" +
      '<p><a href="https://www.drewssoulfoodfw.com/">' +
      "Link to Business Website</a> " +
      "</p>" +
      "</div>" +
      "</div>"
    },
  
 
 {
      position: new google.maps.LatLng(32.650738,-96.926547),
      map: this.map,
      title: '<div id="content">' +
      '<div id="siteNotice">' +
      "</div>" +
      '<h1 id="firstHeading" class="firstHeading">Duncanville Nutrition</h1>' +
      '<div id="bodyContent">' +
      "<p>Type of Business: Retail</p>" +
      "<p>Address: 111 S Cedar Ridge Dr Unit 135 Duncanville, TX 75116</p>" +
      '<p><a href="http://duncanvillenutrition.business.site/">' +
      "Link to Business Website</a> " +
      "</p>" +
      "</div>" +
      "</div>"
    },
  
 
 {
      position: new google.maps.LatLng(32.768834,-96.769378),
      map: this.map,
      title: '<div id="content">' +
      '<div id="siteNotice">' +
      "</div>" +
      '<h1 id="firstHeading" class="firstHeading">Elaine’s Jamaican Kitchen</h1>' +
      '<div id="bodyContent">' +
      "<p>Type of Business: Restaurant</p>" +
      "<p>Address: 2717 Martin Luther King Jr Blvd, Dallas, TX 75215</p>" +
      '<p><a href="">' +
      "Link to Business Website</a> " +
      "</p>" +
      "</div>" +
      "</div>"
    },
  
 
 {
      position: new google.maps.LatLng(32.878709,-96.771097),
      map: this.map,
      title: '<div id="content">' +
      '<div id="siteNotice">' +
      "</div>" +
      '<h1 id="firstHeading" class="firstHeading">Elite Bodistry</h1>' +
      '<div id="bodyContent">' +
      "<p>Type of Business: Retail</p>" +
      "<p>Address: 9669 N Central Expy Suite #250 Dallas TX 75231</p>" +
      '<p><a href="https://www.elitebodistry.me/">' +
      "Link to Business Website</a> " +
      "</p>" +
      "</div>" +
      "</div>"
    },
  
 
 {
      position: new google.maps.LatLng(33.132297,-96.650252),
      map: this.map,
      title: '<div id="content">' +
      '<div id="siteNotice">' +
      "</div>" +
      '<h1 id="firstHeading" class="firstHeading">Embellished Braids</h1>' +
      '<div id="bodyContent">' +
      "<p>Type of Business: Retail</p>" +
      "<p>Address: 241 Towne Place Suite 301 Fairview, Texas 75025</p>" +
      '<p><a href="http://www.embellishedbraids.com/">' +
      "Link to Business Website</a> " +
      "</p>" +
      "</div>" +
      "</div>"
    },
  
 
 {
      position: new google.maps.LatLng(32.766324,-96.7715),
      map: this.map,
      title: '<div id="content">' +
      '<div id="siteNotice">' +
      "</div>" +
      '<h1 id="firstHeading" class="firstHeading">Emerald City Grill</h1>' +
      '<div id="bodyContent">' +
      "<p>Type of Business: Restaurant</p>" +
      "<p>Address: 2532 Martin Luther King Jr Blvd, Dallas, TX 75215</p>" +
      '<p><a href="">' +
      "Link to Business Website</a> " +
      "</p>" +
      "</div>" +
      "</div>"
    },
  
 
 {
      position: new google.maps.LatLng(32.71093,-97.019066),
      map: this.map,
      title: '<div id="content">' +
      '<div id="siteNotice">' +
      "</div>" +
      '<h1 id="firstHeading" class="firstHeading">Ethel Pharmacy</h1>' +
      '<div id="bodyContent">' +
      "<p>Type of Business: Services</p>" +
      "<p>Address: 2451 Robinson Road, Suite 200, Grand Prairie, TX 75051</p>" +
      '<p><a href="https://ethelspharmacy.net/">' +
      "Link to Business Website</a> " +
      "</p>" +
      "</div>" +
      "</div>"
    },
  
 
 {
      position: new google.maps.LatLng(32.67304,-97.115426),
      map: this.map,
      title: '<div id="content">' +
      '<div id="siteNotice">' +
      "</div>" +
      '<h1 id="firstHeading" class="firstHeading">ExcluShear Salon Inc.</h1>' +
      '<div id="bodyContent">' +
      "<p>Type of Business: Retail</p>" +
      "<p>Address: 4508 Matlock Rd. #140 Arlington, TX 76018</p>" +
      '<p><a href="https://www.exclushearsalon.com/">' +
      "Link to Business Website</a> " +
      "</p>" +
      "</div>" +
      "</div>"
    },
  
 
 {
      position: new google.maps.LatLng(33.097339,-96.894249),
      map: this.map,
      title: '<div id="content">' +
      '<div id="siteNotice">' +
      "</div>" +
      '<h1 id="firstHeading" class="firstHeading">Eyeconic Beauté Bar</h1>' +
      '<div id="bodyContent">' +
      "<p>Type of Business: Retail</p>" +
      "<p>Address: 6805 Main St, The Colony, TX 75056</p>" +
      '<p><a href="https://www.vagaro.com/us04/eyeconicbeautebar?fbclid=IwAR07rIw9DQmPV0XNuvA6s0VLAd3bjoLpzGhtn2vG_jNpmT2sadS0WcaNBgE&ig_fbb=true">' +
      "Link to Business Website</a> " +
      "</p>" +
      "</div>" +
      "</div>"
    },
  
 
 {
      position: new google.maps.LatLng(32.85592,-97.187436),
      map: this.map,
      title: '<div id="content">' +
      '<div id="siteNotice">' +
      "</div>" +
      '<h1 id="firstHeading" class="firstHeading">Fat Burger</h1>' +
      '<div id="bodyContent">' +
      "<p>Type of Business: Restaurant</p>" +
      "<p>Address: 6039 Precinct Line Rd Ste #180 North Richland Hills, TX 76180</p>" +
      '<p><a href="https://locations.fatburger.com/united-states/tx/north-richland-hills/6039-precinct-line-rd">' +
      "Link to Business Website</a> " +
      "</p>" +
      "</div>" +
      "</div>"
    },
  
 
 {
      position: new google.maps.LatLng(33.012135,-96.534936),
      map: this.map,
      title: '<div id="content">' +
      '<div id="siteNotice">' +
      "</div>" +
      '<h1 id="firstHeading" class="firstHeading">Fine Apple Vegan</h1>' +
      '<div id="bodyContent">' +
      "<p>Type of Business: Food Truck / Pop-Up</p>" +
      "<p>Address: P.O. Box 779 Wylie, TX 75098</p>" +
      '<p><a href="https://fineapplevegan.com/">' +
      "Link to Business Website</a> " +
      "</p>" +
      "</div>" +
      "</div>"
    },
    {
      position: new google.maps.LatLng(32.664387,-97.133416),
      map: this.map,
      title: '<div id="content">' +
      '<div id="siteNotice">' +
      "</div>" +
      '<h1 id="firstHeading" class="firstHeading">Flavor Wings N Daiquiris</h1>' +
      '<div id="bodyContent">' +
      "<p>Type of Business: Restaurant</p>" +
      "<p>Address: 5005 S.Cooper St. -Suite 175 Arlington, Texas 76017</p>" +
      '<p><a href="https://www.flavorswingsndaiquiris.com/">' +
      "Link to Business Website</a> " +
      "</p>" +
      "</div>" +
      "</div>"
    },
  
 
 {
      position: new google.maps.LatLng(32.754853,-97.332785),
      map: this.map,
      title: '<div id="content">' +
      '<div id="siteNotice">' +
      "</div>" +
      '<h1 id="firstHeading" class="firstHeading">Flowers To Go</h1>' +
      '<div id="bodyContent">' +
      "<p>Type of Business: Retail</p>" +
      "<p>Address: 325 Houston St, Fort Worth, TX 76102</p>" +
      '<p><a href="https://flowerstogofw.com/">' +
      "Link to Business Website</a> " +
      "</p>" +
      "</div>" +
      "</div>"
    },
  
 
 {
      position: new google.maps.LatLng(32.780848,-96.800093),
      map: this.map,
      title: '<div id="content">' +
      '<div id="siteNotice">' +
      "</div>" +
      '<h1 id="firstHeading" class="firstHeading">Fluellen Cupcakes</h1>' +
      '<div id="bodyContent">' +
      "<p>Type of Business: Bakery</p>" +
      "<p>Address: 1408 Elm St, Dallas, TX 75202</p>" +
      '<p><a href="https://www.fluellencupcakes.com/">' +
      "Link to Business Website</a> " +
      "</p>" +
      "</div>" +
      "</div>"
    },
  
 
 {
      position: new google.maps.LatLng(32.604823,-96.92759),
      map: this.map,
      title: '<div id="content">' +
      '<div id="siteNotice">' +
      "</div>" +
      '<h1 id="firstHeading" class="firstHeading">Fluffy’s Chicken and Fish</h1>' +
      '<div id="bodyContent">' +
      "<p>Type of Business: Restaurant</p>" +
      "<p>Address: 635 E. Pleasant Run Rd Cedar Hill, Texas 75104</p>" +
      '<p><a href="">' +
      "Link to Business Website</a> " +
      "</p>" +
      "</div>" +
      "</div>"
    },
  
 
 {
      position: new google.maps.LatLng(32.597164,-96.940944),
      map: this.map,
      title: '<div id="content">' +
      '<div id="siteNotice">' +
      "</div>" +
      '<h1 id="firstHeading" class="firstHeading">Fortitude Wellness Center</h1>' +
      '<div id="bodyContent">' +
      "<p>Type of Business: Beverages</p>" +
      "<p>Address: 241 east, FM1382, Cedar Hill, TX 75104</p>" +
      '<p><a href="">' +
      "Link to Business Website</a> " +
      "</p>" +
      "</div>" +
      "</div>"
    },
  
 
 {
      position: new google.maps.LatLng(32.761985,-96.644228),
      map: this.map,
      title: '<div id="content">' +
      '<div id="siteNotice">' +
      "</div>" +
      '<h1 id="firstHeading" class="firstHeading">Fry Daddy Texas</h1>' +
      '<div id="bodyContent">' +
      "<p>Type of Business: Restaurant</p>" +
      "<p>Address: 10350 Scyene Rd, Dallas, TX, 75227</p>" +
      '<p><a href="https://frydaddystx.com">' +
      "Link to Business Website</a> " +
      "</p>" +
      "</div>" +
      "</div>"
    },
  
 
 {
      position: new google.maps.LatLng(32.657088,-96.890759),
      map: this.map,
      title: '<div id="content">' +
      '<div id="siteNotice">' +
      "</div>" +
      '<h1 id="firstHeading" class="firstHeading">Funnel Cake Paradise</h1>' +
      '<div id="bodyContent">' +
      "<p>Type of Business: Restaurant</p>" +
      "<p>Address: 4353 Gannon ln, #114 Dallas, Texas 75237</p>" +
      '<p><a href="https://funnelcakesparadise.com/">' +
      "Link to Business Website</a> " +
      "</p>" +
      "</div>" +
      "</div>"
    },
  
 
 {
      position: new google.maps.LatLng(32.767204,-96.841011),
      map: this.map,
      title: '<div id="content">' +
      '<div id="siteNotice">' +
      "</div>" +
      '<h1 id="firstHeading" class="firstHeading">G3 Printing</h1>' +
      '<div id="bodyContent">' +
      "<p>Type of Business: Printing</p>" +
      "<p>Address: 1219 Fort Worth Ave, Dallas, TX 75208</p>" +
      '<p><a href="">' +
      "Link to Business Website</a> " +
      "</p>" +
      "</div>" +
      "</div>"
    },
  
 
 {
      position: new google.maps.LatLng(32.766962,-96.795799),
      map: this.map,
      title: '<div id="content">' +
      '<div id="siteNotice">' +
      "</div>" +
      '<h1 id="firstHeading" class="firstHeading">Genie of Dallas</h1>' +
      '<div id="bodyContent">' +
      "<p>Type of Business: Services</p>" +
      "<p>Address: 1409 South Lamar St Unit 708 Dallas, TX 75215</p>" +
      '<p><a href="https://www.windowgenie.com/dallas-central/">' +
      "Link to Business Website</a> " +
      "</p>" +
      "</div>" +
      "</div>"
    },
  
 
 {
      position: new google.maps.LatLng(32.783122,-96.784523),
      map: this.map,
      title: '<div id="content">' +
      '<div id="siteNotice">' +
      "</div>" +
      '<h1 id="firstHeading" class="firstHeading">Giza Printing</h1>' +
      '<div id="bodyContent">' +
      "<p>Type of Business: Printing</p>" +
      "<p>Address: 2717 Commerce St, Dallas, TX 75226</p>" +
      '<p><a href="https://www.gizaprint.com/">' +
      "Link to Business Website</a> " +
      "</p>" +
      "</div>" +
      "</div>"
    },
  
 
 {
      position: new google.maps.LatLng(32.692112,-97.420643),
      map: this.map,
      title: '<div id="content">' +
      '<div id="siteNotice">' +
      "</div>" +
      '<h1 id="firstHeading" class="firstHeading">Goss Fitness</h1>' +
      '<div id="bodyContent">' +
      "<p>Type of Business: Services</p>" +
      "<p>Address: 6445 Southwest Blvd, Benbrook, TX 76132</p>" +
      '<p><a href="http://gossfitness.com/">' +
      "Link to Business Website</a> " +
      "</p>" +
      "</div>" +
      "</div>"
    },
  
 
 {
      position: new google.maps.LatLng(32.672275,-96.82363),
      map: this.map,
      title: '<div id="content">' +
      '<div id="siteNotice">' +
      "</div>" +
      '<h1 id="firstHeading" class="firstHeading">H&J BBQ</h1>' +
      '<div id="bodyContent">' +
      "<p>Type of Business: Restaurant</p>" +
      "<p>Address: 6205 S R L Thornton Fwy, Dallas, TX 75232</p>" +
      '<p><a href="https://zmenu.com/h-and-j-barbeque-dallas-online-menu/">' +
      "Link to Business Website</a> " +
      "</p>" +
      "</div>" +
      "</div>"
    },
  
 
 {
      position: new google.maps.LatLng(32.807425,-96.840277),
      map: this.map,
      title: '<div id="content">' +
      '<div id="siteNotice">' +
      "</div>" +
      '<h1 id="firstHeading" class="firstHeading">Hall’s Honey Fried Chicken</h1>' +
      '<div id="bodyContent">' +
      "<p>Type of Business: Restaurant</p>" +
      "<p>Address: 1407 Medical District Dr, Dallas, TX 75207</p>" +
      '<p><a href="https://www.hallshoneyfriedchicken-md.com/">' +
      "Link to Business Website</a> " +
      "</p>" +
      "</div>" +
      "</div>"
    },
  
 
 {
      position: new google.maps.LatLng(33.084093,-96.713339),
      map: this.map,
      title: '<div id="content">' +
      '<div id="siteNotice">' +
      "</div>" +
      '<h1 id="firstHeading" class="firstHeading">Hamilton’s Social Media Marketing & Design Firm</h1>' +
      '<div id="bodyContent">' +
      "<p>Type of Business: Professional Services</p>" +
      "<p>Address: 7801 Alma Dr Ste 105 Plano, Texas 75025</p>" +
      '<p><a href="http://www.hamiltonssocialmedia.com/">' +
      "Link to Business Website</a> " +
      "</p>" +
      "</div>" +
      "</div>"
    },
  
 
 {
      position: new google.maps.LatLng(32.787421,-96.596858),
      map: this.map,
      title: '<div id="content">' +
      '<div id="siteNotice">' +
      "</div>" +
      '<h1 id="firstHeading" class="firstHeading">Hannah’s Gluten Free Bakery</h1>' +
      '<div id="bodyContent">' +
      "<p>Type of Business: Bakery</p>" +
      "<p>Address: 1830 Range Drive, Suite #102 Mesquite, TX 75149</p>" +
      '<p><a href="https://hannahsglutenfreebakery.com/">' +
      "Link to Business Website</a> " +
      "</p>" +
      "</div>" +
      "</div>"
    },
  
 
 {
      position: new google.maps.LatLng(32.706297,-96.857936),
      map: this.map,
      title: '<div id="content">' +
      '<div id="siteNotice">' +
      "</div>" +
      '<h1 id="firstHeading" class="firstHeading">Hardeman’s BBQ</h1>' +
      '<div id="bodyContent">' +
      "<p>Type of Business: Restaurant</p>" +
      "<p>Address: 2425 W Kiest Blvd, Dallas, TX 75233</p>" +
      '<p><a href="None">' +
      "Link to Business Website</a> " +
      "</p>" +
      "</div>" +
      "</div>"
    },
  
 
 {
      position: new google.maps.LatLng(32.739443,-96.87393),
      map: this.map,
      title: '<div id="content">' +
      '<div id="siteNotice">' +
      "</div>" +
      '<h1 id="firstHeading" class="firstHeading">Hardeman’s BBQ</h1>' +
      '<div id="bodyContent">' +
      "<p>Type of Business: Restaurant</p>" +
      "<p>Address: 618 S Westmoreland Rd, Dallas, TX 75211</p>" +
      '<p><a href="None">' +
      "Link to Business Website</a> " +
      "</p>" +
      "</div>" +
      "</div>"
    },
  
 
 {
      position: new google.maps.LatLng(32.763887,-96.702),
      map: this.map,
      title: '<div id="content">' +
      '<div id="siteNotice">' +
      "</div>" +
      '<h1 id="firstHeading" class="firstHeading">Hardeman’s BBQ</h1>' +
      '<div id="bodyContent">' +
      "<p>Type of Business: Restaurant</p>" +
      "<p>Address: 6931 Scyene Rd, Dallas, TX 75227</p>" +
      '<p><a href="None">' +
      "Link to Business Website</a> " +
      "</p>" +
      "</div>" +
      "</div>"
    },
  
 
 {
      position: new google.maps.LatLng(32.805342,-96.799077),
      map: this.map,
      title: '<div id="content">' +
      '<div id="siteNotice">' +
      "</div>" +
      '<h1 id="firstHeading" class="firstHeading">Harris House of Heroes</h1>' +
      '<div id="bodyContent">' +
      "<p>Type of Business: Restaurant/Bar</p>" +
      "<p>Address: 3403 McKinney Ave, Dallas, TX, 75204</p>" +
      '<p><a href="https://Harrishouseofheroestx.com">' +
      "Link to Business Website</a> " +
      "</p>" +
      "</div>" +
      "</div>"
    },
  
    {
      position: new google.maps.LatLng(33.183025,-96.846712),
      map: this.map,
      title: '<div id="content">' +
      '<div id="siteNotice">' +
      "</div>" +
      '<h1 id="firstHeading" class="firstHeading">Her Secret Garden V-Steam & Spa</h1>' +
      '<div id="bodyContent">' +
      "<p>Type of Business: Spa</p>" +
      "<p>Address: 10050 Legacy Drive Unit 100 Suite 200 & 202, Frisco, TX 75033</p>" +
      '<p><a href="https://www.hersecretgardenvsteam.com/">' +
      "Link to Business Website</a> " +
      "</p>" +
      "</div>" +
      "</div>"
    },
  
 
 {
      position: new google.maps.LatLng(32.812753,-96.860832),
      map: this.map,
      title: '<div id="content">' +
      '<div id="siteNotice">' +
      "</div>" +
      '<h1 id="firstHeading" class="firstHeading">Heroes Lounge</h1>' +
      '<div id="bodyContent">' +
      "<p>Type of Business: Restaurant/Bar</p>" +
      "<p>Address: 3094 N Stemmons Fwy, Dallas, TX 75247</p>" +
      '<p><a href="https://heroesdallas.com">' +
      "Link to Business Website</a> " +
      "</p>" +
      "</div>" +
      "</div>"
    },
  
 
 {
      position: new google.maps.LatLng(32.714218,-97.265603),
      map: this.map,
      title: '<div id="content">' +
      '<div id="siteNotice">' +
      "</div>" +
      '<h1 id="firstHeading" class="firstHeading">Hoberts Southern Soul Food</h1>' +
      '<div id="bodyContent">' +
      "<p>Type of Business: Restaurant</p>" +
      "<p>Address: 4023 E Berry St, Fort Worth, TX 76105</p>" +
      '<p><a href="Not active">' +
      "Link to Business Website</a> " +
      "</p>" +
      "</div>" +
      "</div>"
    },
  
 
 {
      position: new google.maps.LatLng(32.7487,-96.827962),
      map: this.map,
      title: '<div id="content">' +
      '<div id="siteNotice">' +
      "</div>" +
      '<h1 id="firstHeading" class="firstHeading">Indigo 1745</h1>' +
      '<div id="bodyContent">' +
      "<p>Type of Business: Retail</p>" +
      "<p>Address: 370 W 7th Street, Dallas, Tx 75208</p>" +
      '<p><a href="http://indigo1745.com/">' +
      "Link to Business Website</a> " +
      "</p>" +
      "</div>" +
      "</div>"
    },
  
 
 {
      position: new google.maps.LatLng(32.791242,-96.774065),
      map: this.map,
      title: '<div id="content">' +
      '<div id="siteNotice">' +
      "</div>" +
      '<h1 id="firstHeading" class="firstHeading">Invasions</h1>' +
      '<div id="bodyContent">' +
      "<p>Type of Business: Restaurant</p>" +
      "<p>Address: 4029 Crutcher St. Dallas, TX 75246</p>" +
      '<p><a href="https://www.eatinvasions.com/">' +
      "Link to Business Website</a> " +
      "</p>" +
      "</div>" +
      "</div>"
    },
  
 
 {
      position: new google.maps.LatLng(32.692329,-97.017456),
      map: this.map,
      title: '<div id="content">' +
      '<div id="siteNotice">' +
      "</div>" +
      '<h1 id="firstHeading" class="firstHeading">ITSO Vegan</h1>' +
      '<div id="bodyContent">' +
      "<p>Type of Business: Restaurant</p>" +
      "<p>Address: 830 Mayfield Rd. #600 Grand Prairie, Texas 75052</p>" +
      '<p><a href="https://www.itsovegan.com/">' +
      "Link to Business Website</a> " +
      "</p>" +
      "</div>" +
      "</div>"
    },
  
 
 {
      position: new google.maps.LatLng(32.706135,-97.119208),
      map: this.map,
      title: '<div id="content">' +
      '<div id="siteNotice">' +
      "</div>" +
      '<h1 id="firstHeading" class="firstHeading">Jamaican Gates Carribean Cuisine</h1>' +
      '<div id="bodyContent">' +
      "<p>Type of Business: Restaurant</p>" +
      "<p>Address: 1020 W. ARKANSAS LANE, ARLINGTON, TEXAS 76013.</p>" +
      '<p><a href="https://www.jamaicagates.com/">' +
      "Link to Business Website</a> " +
      "</p>" +
      "</div>" +
      "</div>"
    },
  
 
 {
      position: new google.maps.LatLng(32.958965,-96.829982),
      map: this.map,
      title: '<div id="content">' +
      '<div id="siteNotice">' +
      "</div>" +
      '<h1 id="firstHeading" class="firstHeading">JS International Grill -Addison</h1>' +
      '<div id="bodyContent">' +
      "<p>Type of Business: Restaurant</p>" +
      "<p>Address: 15375 Addison Rd, Addison, TX, 75001</p>" +
      '<p><a href="">' +
      "Link to Business Website</a> " +
      "</p>" +
      "</div>" +
      "</div>"
    },
  
 
 {
      position: new google.maps.LatLng(32.777696,-96.790265),
      map: this.map,
      title: '<div id="content">' +
      '<div id="siteNotice">' +
      "</div>" +
      '<h1 id="firstHeading" class="firstHeading">JS International Grill -Dallas</h1>' +
      '<div id="bodyContent">' +
      "<p>Type of Business: Restaurant</p>" +
      "<p>Address: 920 S Harwood St, Dallas, TX 75201</p>" +
      '<p><a href="">' +
      "Link to Business Website</a> " +
      "</p>" +
      "</div>" +
      "</div>"
    },
  
 
 {
      position: new google.maps.LatLng(32.7791,-96.797709),
      map: this.map,
      title: '<div id="content">' +
      '<div id="siteNotice">' +
      "</div>" +
      '<h1 id="firstHeading" class="firstHeading">JTaylor Studios</h1>' +
      '<div id="bodyContent">' +
      "<p>Type of Business: Services</p>" +
      "<p>Address: 1500 Jackson St, Dallas, TX</p>" +
      '<p><a href="https://jtaylorstudios.com">' +
      "Link to Business Website</a> " +
      "</p>" +
      "</div>" +
      "</div>"
    },
  
 
 {
      position: new google.maps.LatLng(32.764632,-96.766897),
      map: this.map,
      title: '<div id="content">' +
      '<div id="siteNotice">' +
      "</div>" +
      '<h1 id="firstHeading" class="firstHeading">Juanita Craft House</h1>' +
      '<div id="bodyContent">' +
      "<p>Type of Business: Museum</p>" +
      "<p>Address: 2618 Warren Ave, Dallas, TX 75215</p>" +
      '<p><a href="https://dallascityhall.com/departments/sustainabledevelopment/historicpreservation/Pages/Juanita-Craft-House.aspx">' +
      "Link to Business Website</a> " +
      "</p>" +
      "</div>" +
      "</div>"
    },
   
 
 {
      position: new google.maps.LatLng(32.70996,-97.023238),
      map: this.map,
      title: '<div id="content">' +
      '<div id="siteNotice">' +
      "</div>" +
      '<h1 id="firstHeading" class="firstHeading">Kemi Kitchen</h1>' +
      '<div id="bodyContent">' +
      "<p>Type of Business: Restaurant</p>" +
      "<p>Address: 1102 W Pioneer Pkwy #125, Grand Prairie, TX 75051</p>" +
      '<p><a href="https://kemiskitchen.com">' +
      "Link to Business Website</a> " +
      "</p>" +
      "</div>" +
      "</div>"
    },
  
 
 {
      position: new google.maps.LatLng(32.757676,-96.823351),
      map: this.map,
      title: '<div id="content">' +
      '<div id="siteNotice">' +
      "</div>" +
      '<h1 id="firstHeading" class="firstHeading">Kessler Baking Studio</h1>' +
      '<div id="bodyContent">' +
      "<p>Type of Business: Bakery</p>" +
      "<p>Address: 1129 North Beckley Avenue Dallas, TX 75203</p>" +
      '<p><a href="https://www.kesslerbakingstudio.com/">' +
      "Link to Business Website</a> " +
      "</p>" +
      "</div>" +
      "</div>"
    },
  
 
 {
      position: new google.maps.LatLng(32.894296,-96.577931),
      map: this.map,
      title: '<div id="content">' +
      '<div id="siteNotice">' +
      "</div>" +
      '<h1 id="firstHeading" class="firstHeading">Key’s Beauty Boutique</h1>' +
      '<div id="bodyContent">' +
      "<p>Type of Business: Retail</p>" +
      "<p>Address: 2617 Knights Bridge Dr, Rowlett, TX 75088</p>" +
      '<p><a href="https://keysbeautyboutique.com/">' +
      "Link to Business Website</a> " +
      "</p>" +
      "</div>" +
      "</div>"
    },
    {
      position: new google.maps.LatLng(32.772116,-96.794029),
      map: this.map,
      title: '<div id="content">' +
      '<div id="siteNotice">' +
      "</div>" +
      '<h1 id="firstHeading" class="firstHeading">Koffee Day Spa</h1>' +
      '<div id="bodyContent">' +
      "<p>Type of Business: Retail</p>" +
      "<p>Address: 1118 S Akard St, Dallas, TX 75201</p>" +
      '<p><a href="https://www.koffeedayspa.com/">' +
      "Link to Business Website</a> " +
      "</p>" +
      "</div>" +
      "</div>"
    },
  
 
 {
      position: new google.maps.LatLng(32.743451,-96.826888),
      map: this.map,
      title: '<div id="content">' +
      '<div id="siteNotice">' +
      "</div>" +
      '<h1 id="firstHeading" class="firstHeading">Kookie Haven</h1>' +
      '<div id="bodyContent">' +
      "<p>Type of Business: Bakery</p>" +
      "<p>Address: 337 WEST JEFFERSON BOULEVARDDALLAS, TX, 75208</p>" +
      '<p><a href="https://www.kookiehaven.com/">' +
      "Link to Business Website</a> " +
      "</p>" +
      "</div>" +
      "</div>"
    },
  
 
 {
      position: new google.maps.LatLng(32.743451,-96.826888),
      map: this.map,
      title: '<div id="content">' +
      '<div id="siteNotice">' +
      "</div>" +
      '<h1 id="firstHeading" class="firstHeading">Kookie Haven</h1>' +
      '<div id="bodyContent">' +
      "<p>Type of Business: Bakery</p>" +
      "<p>Address: 337 W Jefferson Blvd Dallas, Texas 75208</p>" +
      '<p><a href="https://www.kookiehaven.com/?fbclid=IwAR0WcpAuwZcFPia_UpZr08YqzM5d4VvfDGLkZleGuFHvMW_AeEBjJBViSXU">' +
      "Link to Business Website</a> " +
      "</p>" +
      "</div>" +
      "</div>"
    },
  
 
 {
      position: new google.maps.LatLng(32.713906,-96.7765),
      map: this.map,
      title: '<div id="content">' +
      '<div id="siteNotice">' +
      "</div>" +
      '<h1 id="firstHeading" class="firstHeading">Koolys BBQ</h1>' +
      '<div id="bodyContent">' +
      "<p>Type of Business: Restaurant</p>" +
      "<p>Address: 3627 Bonnie View Rd, Suite F Dallas, TX 75216/ 122 S Hampton Rd Desoto Tx 75115</p>" +
      '<p><a href="https://koolys-bbq.business.site/">' +
      "Link to Business Website</a> " +
      "</p>" +
      "</div>" +
      "</div>"
    },
  
 
 {
      position: new google.maps.LatLng(32.605402,-96.857978),
      map: this.map,
      title: '<div id="content">' +
      '<div id="siteNotice">' +
      "</div>" +
      '<h1 id="firstHeading" class="firstHeading">Krab Kingz</h1>' +
      '<div id="bodyContent">' +
      "<p>Type of Business: Restaurant</p>" +
      "<p>Address: 917 North Hampton Rd, #101 DeSoto, Texas 75115</p>" +
      '<p><a href="https://tapterminals.com/krab-kingz-7/?fbclid=IwAR2LyXn-NK5M1jNjlmxqccT30OUMfsgqi3H-BXr7eVx4a7kXjk2zZ1HtFMM">' +
      "Link to Business Website</a> " +
      "</p>" +
      "</div>" +
      "</div>"
    },
  
 
 {
      position: new google.maps.LatLng(32.948986,-96.730448),
      map: this.map,
      title: '<div id="content">' +
      '<div id="siteNotice">' +
      "</div>" +
      '<h1 id="firstHeading" class="firstHeading">Krab Kingz 7</h1>' +
      '<div id="bodyContent">' +
      "<p>Type of Business: Restaurant</p>" +
      "<p>Address: 102 N. McKinney St, Richardson, TX, 75081</p>" +
      '<p><a href="https://tapterminals.com/krab-kingz-7">' +
      "Link to Business Website</a> " +
      "</p>" +
      "</div>" +
      "</div>"
    },
  
 
 {
      position: new google.maps.LatLng(33.006501,-96.828236),
      map: this.map,
      title: '<div id="content">' +
      '<div id="siteNotice">' +
      "</div>" +
      '<h1 id="firstHeading" class="firstHeading">Lea Leas Daiquiris</h1>' +
      '<div id="bodyContent">' +
      "<p>Type of Business: Restaurant</p>" +
      "<p>Address: 18900 Dallas Pkwy Ste. 104 Dallas, Texas</p>" +
      '<p><a href="N/A">' +
      "Link to Business Website</a> " +
      "</p>" +
      "</div>" +
      "</div>"
    },
  
 
 {
      position: new google.maps.LatLng(33.006501,-96.828236),
      map: this.map,
      title: '<div id="content">' +
      '<div id="siteNotice">' +
      "</div>" +
      '<h1 id="firstHeading" class="firstHeading">Lea-Lea Daquiri Shop</h1>' +
      '<div id="bodyContent">' +
      "<p>Type of Business: Restaurant</p>" +
      "<p>Address: 18900 Dallas Pkwy Suite 104, Dallas, TX 75287</p>" +
      '<p><a href="N/A">' +
      "Link to Business Website</a> " +
      "</p>" +
      "</div>" +
      "</div>"
    },
  
 
 {
      position: new google.maps.LatLng(32.928315,-97.084826),
      map: this.map,
      title: '<div id="content">' +
      '<div id="siteNotice">' +
      "</div>" +
      '<h1 id="firstHeading" class="firstHeading">Lennys Grill & Subs</h1>' +
      '<div id="bodyContent">' +
      "<p>Type of Business: Restaurant</p>" +
      "<p>Address: 1231 William D. Tate Ave, Ste. 200, Grapevine, TX, 76051</p>" +
      '<p><a href="https://lennys.com">' +
      "Link to Business Website</a> " +
      "</p>" +
      "</div>" +
      "</div>"
    },
  
 
 {
      position: new google.maps.LatLng(32.794841,-96.79967),
      map: this.map,
      title: '<div id="content">' +
      '<div id="siteNotice">' +
      "</div>" +
      '<h1 id="firstHeading" class="firstHeading">Little House on Routh</h1>' +
      '<div id="bodyContent">' +
      "<p>Type of Business: Event Space</p>" +
      "<p>Address: 2310 Routh St, Dallas, TX 75201</p>" +
      '<p><a href="https://www.theimanproject.com/2310routhstreet">' +
      "Link to Business Website</a> " +
      "</p>" +
      "</div>" +
      "</div>"
    },
  
 
 {
      position: new google.maps.LatLng(32.765006,-97.062434),
      map: this.map,
      title: '<div id="content">' +
      '<div id="siteNotice">' +
      "</div>" +
      '<h1 id="firstHeading" class="firstHeading">Livingwell HealthCare Clinic</h1>' +
      '<div id="bodyContent">' +
      "<p>Type of Business: Services</p>" +
      "<p>Address: 1106 N Highway 360 Suite 230, Grand Prairie, Texas 75050</p>" +
      '<p><a href="https://livingwellhealthcareclinic.com">' +
      "Link to Business Website</a> " +
      "</p>" +
      "</div>" +
      "</div>"
    },
  
 
 {
      position: new google.maps.LatLng(32.950005,-97.133719),
      map: this.map,
      title: '<div id="content">' +
      '<div id="siteNotice">' +
      "</div>" +
      '<h1 id="firstHeading" class="firstHeading">Lo-Lo Chicken & Waffles</h1>' +
      '<div id="bodyContent">' +
      "<p>Type of Business: Restaurant</p>" +
      "<p>Address: 1201 E State Hwy 114 Ste 100, Southlake, TX 76092</p>" +
      '<p><a href="https://loloschickenandwaffles.com">' +
      "Link to Business Website</a> " +
      "</p>" +
      "</div>" +
      "</div>"
    },
  
 
 {
      position: new google.maps.LatLng(32.742355,-97.325809),
      map: this.map,
      title: '<div id="content">' +
      '<div id="siteNotice">' +
      "</div>" +
      '<h1 id="firstHeading" class="firstHeading">Loft22 Cakes</h1>' +
      '<div id="bodyContent">' +
      "<p>Type of Business: Bakery</p>" +
      "<p>Address: 106 E Daggett Ave, Fort Worth, TX 76104</p>" +
      '<p><a href="http://www.loft22cakes.com/">' +
      "Link to Business Website</a> " +
      "</p>" +
      "</div>" +
      "</div>"
    },
  
 
 {
      position: new google.maps.LatLng(32.950005,-97.133719),
      map: this.map,
      title: '<div id="content">' +
      '<div id="siteNotice">' +
      "</div>" +
      '<h1 id="firstHeading" class="firstHeading">LoLos Chicken and Waffles</h1>' +
      '<div id="bodyContent">' +
      "<p>Type of Business: Restaurant</p>" +
      "<p>Address: 1201 E. State Hwy 114, Suite 100 Southlake, Texas 76092</p>" +
      '<p><a href="http://www.loloschickenandwaffles.com/">' +
      "Link to Business Website</a> " +
      "</p>" +
      "</div>" +
      "</div>"
    },
  
    {
      position: new google.maps.LatLng(32.743523,-97.325725),
      map: this.map,
      title: '<div id="content">' +
      '<div id="siteNotice">' +
      "</div>" +
      '<h1 id="firstHeading" class="firstHeading">Love Remixed</h1>' +
      '<div id="bodyContent">' +
      "<p>Type of Business: Retail</p>" +
      "<p>Address: 109 S. Main St. , Fort Worth, Texas 76104</p>" +
      '<p><a href="https://itsloveremixed.com/">' +
      "Link to Business Website</a> " +
      "</p>" +
      "</div>" +
      "</div>"
    },
  
 
 {
      position: new google.maps.LatLng(32.920875,-96.991325),
      map: this.map,
      title: '<div id="content">' +
      '<div id="siteNotice">' +
      "</div>" +
      '<h1 id="firstHeading" class="firstHeading">Love Your Smile Dental</h1>' +
      '<div id="bodyContent">' +
      "<p>Type of Business: Dentist</p>" +
      "<p>Address: 3365 Regent Blvd #120, Irving, TX 75063</p>" +
      '<p><a href="">' +
      "Link to Business Website</a> " +
      "</p>" +
      "</div>" +
      "</div>"
    },
  
 
 {
      position: new google.maps.LatLng(32.630771,-97.296874),
      map: this.map,
      title: '<div id="content">' +
      '<div id="siteNotice">' +
      "</div>" +
      '<h1 id="firstHeading" class="firstHeading">Madea’s Down Home Cookin</h1>' +
      '<div id="bodyContent">' +
      "<p>Type of Business: Restaurant</p>" +
      "<p>Address: 1019 W Enon Ave Everman, Texas 76140</p>" +
      '<p><a href="http://www.madeasdownhomecookin.com/">' +
      "Link to Business Website</a> " +
      "</p>" +
      "</div>" +
      "</div>"
    },
  
 
 {
      position: new google.maps.LatLng(32.805437,-96.792131),
      map: this.map,
      title: '<div id="content">' +
      '<div id="siteNotice">' +
      "</div>" +
      '<h1 id="firstHeading" class="firstHeading">Madison Cache MedSpa</h1>' +
      '<div id="bodyContent">' +
      "<p>Type of Business: Salons & Spas</p>" +
      "<p>Address: 2711 N Haskell Avenue #300, Dallas, TX 75204</p>" +
      '<p><a href="https://madisoncachemedspa.com">' +
      "Link to Business Website</a> " +
      "</p>" +
      "</div>" +
      "</div>"
    },
  
 
 {
      position: new google.maps.LatLng(32.732091,-97.319335),
      map: this.map,
      title: '<div id="content">' +
      '<div id="siteNotice">' +
      "</div>" +
      '<h1 id="firstHeading" class="firstHeading">Mama Es BBQ & Home Cooking</h1>' +
      '<div id="bodyContent">' +
      "<p>Type of Business: Restaurant</p>" +
      "<p>Address: 818 E Rosedale Fort Worth, TX 76104</p>" +
      '<p><a href="">' +
      "Link to Business Website</a> " +
      "</p>" +
      "</div>" +
      "</div>"
    },
  
 
 {
      position: new google.maps.LatLng(32.579663,-97.073359),
      map: this.map,
      title: '<div id="content">' +
      '<div id="siteNotice">' +
      "</div>" +
      '<h1 id="firstHeading" class="firstHeading">Manna Juice Bar</h1>' +
      '<div id="bodyContent">' +
      "<p>Type of Business: Juice Shop</p>" +
      "<p>Address: 3806 E Broad St #128, Mansfield, TX 76063</p>" +
      '<p><a href="https://drinkmannajuice.com">' +
      "Link to Business Website</a> " +
      "</p>" +
      "</div>" +
      "</div>"
    },
  
 
 {
      position: new google.maps.LatLng(32.590276,-96.82603),
      map: this.map,
      title: '<div id="content">' +
      '<div id="siteNotice">' +
      "</div>" +
      '<h1 id="firstHeading" class="firstHeading">Mckenzie’s Catering</h1>' +
      '<div id="bodyContent">' +
      "<p>Type of Business: Restaurant</p>" +
      "<p>Address: 1223 E. Beltline Rd Ste 128 DeSoto, Texas</p>" +
      '<p><a href="">' +
      "Link to Business Website</a> " +
      "</p>" +
      "</div>" +
      "</div>"
    },
  
 
 {
      position: new google.maps.LatLng(32.591932,-96.856574),
      map: this.map,
      title: '<div id="content">' +
      '<div id="siteNotice">' +
      "</div>" +
      '<h1 id="firstHeading" class="firstHeading">Mother Basket</h1>' +
      '<div id="bodyContent">' +
      "<p>Type of Business: Restaurant</p>" +
      "<p>Address: 208 N Hampton Rd, Suite C Desoto, TX 75115</p>" +
      '<p><a href="">' +
      "Link to Business Website</a> " +
      "</p>" +
      "</div>" +
      "</div>"
    },
  
 
 {
      position: new google.maps.LatLng(32.662287,-96.875278),
      map: this.map,
      title: '<div id="content">' +
      '<div id="siteNotice">' +
      "</div>" +
      '<h1 id="firstHeading" class="firstHeading">My Wow Dental</h1>' +
      '<div id="bodyContent">' +
      "<p>Type of Business: Dentist</p>" +
      "<p>Address: 3306 W Camp Wisdom Rd #100, Dallas, TX 75237</p>" +
      '<p><a href="">' +
      "Link to Business Website</a> " +
      "</p>" +
      "</div>" +
      "</div>"
    },
  
 
 {
      position: new google.maps.LatLng(32.778876,-96.853197),
      map: this.map,
      title: '<div id="content">' +
      '<div id="siteNotice">' +
      "</div>" +
      '<h1 id="firstHeading" class="firstHeading">Odom’s BBQ</h1>' +
      '<div id="bodyContent">' +
      "<p>Type of Business: Restaurant</p>" +
      "<p>Address: 1971 Singleton Blvd, Dallas, TX 75212</p>" +
      '<p><a href="">' +
      "Link to Business Website</a> " +
      "</p>" +
      "</div>" +
      "</div>"
    },
  
 
 {
      position: new google.maps.LatLng(32.765813,-96.792291),
      map: this.map,
      title: '<div id="content">' +
      '<div id="siteNotice">' +
      "</div>" +
      '<h1 id="firstHeading" class="firstHeading">Off the Bone Barbeque</h1>' +
      '<div id="bodyContent">' +
      "<p>Type of Business: Restaurant</p>" +
      "<p>Address: 1734 S Lamar St, Dallas, TX 75215</p>" +
      '<p><a href="https://offthebonebarbeque.com/">' +
      "Link to Business Website</a> " +
      "</p>" +
      "</div>" +
      "</div>"
    },
  
 
 {
      position: new google.maps.LatLng(32.634247,-97.379428),
      map: this.map,
      title: '<div id="content">' +
      '<div id="siteNotice">' +
      "</div>" +
      '<h1 id="firstHeading" class="firstHeading">Ooowwweee Wangz N Catfish</h1>' +
      '<div id="bodyContent">' +
      "<p>Type of Business: Restaurant</p>" +
      "<p>Address: 3951 Sycamore School Road, Ste. 117 Fort Worth, TX</p>" +
      '<p><a href="http://www.ooowwweee.com/">' +
      "Link to Business Website</a> " +
      "</p>" +
      "</div>" +
      "</div>"
    },
  
 
 {
      position: new google.maps.LatLng(32.780983,-96.792734),
      map: this.map,
      title: '<div id="content">' +
      '<div id="siteNotice">' +
      "</div>" +
      '<h1 id="firstHeading" class="firstHeading">Opera Nightclub</h1>' +
      '<div id="bodyContent">' +
      "<p>Type of Business: Bar/Nightclub</p>" +
      "<p>Address: 2026 Commerce St., Dallas, TX 75201</p>" +
      '<p><a href="none">' +
      "Link to Business Website</a> " +
      "</p>" +
      "</div>" +
      "</div>"
    },
  
 
 {
      position: new google.maps.LatLng(32.97026,-96.650263),
      map: this.map,
      title: '<div id="content">' +
      '<div id="siteNotice">' +
      "</div>" +
      '<h1 id="firstHeading" class="firstHeading">Pangea Restaurant & Bar</h1>' +
      '<div id="bodyContent">' +
      "<p>Type of Business: Restaurant</p>" +
      "<p>Address: 6309 N President George Bush Hwy #8101, Garland, TX 75044</p>" +
      '<p><a href="https://pangeadallas.com">' +
      "Link to Business Website</a> " +
      "</p>" +
      "</div>" +
      "</div>"
    },
  
 
 {
      position: new google.maps.LatLng(32.97026,-96.650263),
      map: this.map,
      title: '<div id="content">' +
      '<div id="siteNotice">' +
      "</div>" +
      '<h1 id="firstHeading" class="firstHeading">Pangea Restaurant and Bar</h1>' +
      '<div id="bodyContent">' +
      "<p>Type of Business: Restaurant</p>" +
      "<p>Address: 6309 N President George Bush Hwy Suite 8101 Garland, TX 75044</p>" +
      '<p><a href="https://www.pangeadallas.com/">' +
      "Link to Business Website</a> " +
      "</p>" +
      "</div>" +
      "</div>"
    },
  
 
 {
      position: new google.maps.LatLng(32.692329,-97.017456),
      map: this.map,
      title: '<div id="content">' +
      '<div id="siteNotice">' +
      "</div>" +
      '<h1 id="firstHeading" class="firstHeading">Peace Health and Wellness Clinic</h1>' +
      '<div id="bodyContent">' +
      "<p>Type of Business: Services</p>" +
      "<p>Address: 830 Mayfield Road, Suite 100, Grand Prairie TX 75052</p>" +
      '<p><a href="https://peacehealthandwellnessclinic.com">' +
      "Link to Business Website</a> " +
      "</p>" +
      "</div>" +
      "</div>"
    },
  
 
 {
      position: new google.maps.LatLng(32.58898,-96.851479),
      map: this.map,
      title: '<div id="content">' +
      '<div id="siteNotice">' +
      "</div>" +
      '<h1 id="firstHeading" class="firstHeading">Peace Love Eatz</h1>' +
      '<div id="bodyContent">' +
      "<p>Type of Business: Restaurant</p>" +
      "<p>Address: 324 E Belt Line Rd #205, DeSoto, TX 75115</p>" +
      '<p><a href="https://www.peaceloveeatz.com/">' +
      "Link to Business Website</a> " +
      "</p>" +
      "</div>" +
      "</div>"
    },
  
 
 {
      position: new google.maps.LatLng(32.58898,-96.851479),
      map: this.map,
      title: '<div id="content">' +
      '<div id="siteNotice">' +
      "</div>" +
      '<h1 id="firstHeading" class="firstHeading">Peace Love Eatz</h1>' +
      '<div id="bodyContent">' +
      "<p>Type of Business: Restaurant, Food Truck</p>" +
      "<p>Address: 324 E. Beltline Rd., Desoto, TX 75115</p>" +
      '<p><a href="https://peaceloveeatz.com">' +
      "Link to Business Website</a> " +
      "</p>" +
      "</div>" +
      "</div>"
    },
  
 
 {
      position: new google.maps.LatLng(32.589164,-96.955212),
      map: this.map,
      title: '<div id="content">' +
      '<div id="siteNotice">' +
      "</div>" +
      '<h1 id="firstHeading" class="firstHeading">Phat Girlz BBQ</h1>' +
      '<div id="bodyContent">' +
      "<p>Type of Business: Restaurant</p>" +
      "<p>Address: 107 S Main St Cedar Hill, TX 75104</p>" +
      '<p><a href="">' +
      "Link to Business Website</a> " +
      "</p>" +
      "</div>" +
      "</div>"
    },
  
 
 {
      position: new google.maps.LatLng(32.827178,-96.626593),
      map: this.map,
      title: '<div id="content">' +
      '<div id="siteNotice">' +
      "</div>" +
      '<h1 id="firstHeading" class="firstHeading">Piety Wellness and Aesthetics</h1>' +
      '<div id="bodyContent">' +
      "<p>Type of Business: Retail</p>" +
      "<p>Address: 4701 N Galloway Ave Suite 108, Mesquite, TX 75150</p>" +
      '<p><a href="https://www.pietywellness.com/">' +
      "Link to Business Website</a> " +
      "</p>" +
      "</div>" +
      "</div>"
    },
  
 
 {
      position: new google.maps.LatLng(32.7494,-96.871011),
      map: this.map,
      title: '<div id="content">' +
      '<div id="siteNotice">' +
      "</div>" +
      '<h1 id="firstHeading" class="firstHeading">Pink Lounge</h1>' +
      '<div id="bodyContent">' +
      "<p>Type of Business: Bar/Nightclub</p>" +
      "<p>Address: 3022 W. Davis Street, Dallas, TX, 75211</p>" +
      '<p><a href="N/A">' +
      "Link to Business Website</a> " +
      "</p>" +
      "</div>" +
      "</div>"
    },
  
 
 {
      position: new google.maps.LatLng(32.777993,-96.828768),
      map: this.map,
      title: '<div id="content">' +
      '<div id="siteNotice">' +
      "</div>" +
      '<h1 id="firstHeading" class="firstHeading">Pressed Roots (Hair)</h1>' +
      '<div id="bodyContent">' +
      "<p>Type of Business: Services</p>" +
      "<p>Address: 320 Singleton Boulevard, Suite 160 Dallas, TX 75212</p>" +
      '<p><a href="https://pressedroots.com/">' +
      "Link to Business Website</a> " +
      "</p>" +
      "</div>" +
      "</div>"
    },
  
 
 {
      position: new google.maps.LatLng(32.863141,-96.897455),
      map: this.map,
      title: '<div id="content">' +
      '<div id="siteNotice">' +
      "</div>" +
      '<h1 id="firstHeading" class="firstHeading">PrymeBar Dallas</h1>' +
      '<div id="bodyContent">' +
      "<p>Type of Business: Bar/Nightclub</p>" +
      "<p>Address: 10333 Technology Blvd W, Dallas, TX, 752220</p>" +
      '<p><a href="https://prymebardallas">' +
      "Link to Business Website</a> " +
      "</p>" +
      "</div>" +
      "</div>"
    },
  
 
 {
      position: new google.maps.LatLng(32.72516,-96.811151),
      map: this.map,
      title: '<div id="content">' +
      '<div id="siteNotice">' +
      "</div>" +
      '<h1 id="firstHeading" class="firstHeading">Recipe Oak Cliff</h1>' +
      '<div id="bodyContent">' +
      "<p>Type of Business: Restaurant</p>" +
      "<p>Address: 1831 S Ewing Ave, Dallas, TX 75216</p>" +
      '<p><a href="https://www.recipeoc.com/">' +
      "Link to Business Website</a> " +
      "</p>" +
      "</div>" +
      "</div>"
    },
  
 
 {
      position: new google.maps.LatLng(32.72516,-96.811151),
      map: this.map,
      title: '<div id="content">' +
      '<div id="siteNotice">' +
      "</div>" +
      '<h1 id="firstHeading" class="firstHeading">Recipe Oakcliff</h1>' +
      '<div id="bodyContent">' +
      "<p>Type of Business: Restaurant</p>" +
      "<p>Address: 1831 S Ewing Ave, Dallas, TX 75216</p>" +
      '<p><a href="https://www.recipeoc.com/">' +
      "Link to Business Website</a> " +
      "</p>" +
      "</div>" +
      "</div>"
    },
  
 
 {
      position: new google.maps.LatLng(32.718757,-96.80483),
      map: this.map,
      title: '<div id="content">' +
      '<div id="siteNotice">' +
      "</div>" +
      '<h1 id="firstHeading" class="firstHeading">Record’s BBQ</h1>' +
      '<div id="bodyContent">' +
      "<p>Type of Business: Restaurant</p>" +
      "<p>Address: 2405 S Lancaster Rd, Dallas, TX 75216</p>" +
      '<p><a href="">' +
      "Link to Business Website</a> " +
      "</p>" +
      "</div>" +
      "</div>"
    },
  
 
 {
      position: new google.maps.LatLng(32.761944,-96.776197),
      map: this.map,
      title: '<div id="content">' +
      '<div id="siteNotice">' +
      "</div>" +
      '<h1 id="firstHeading" class="firstHeading">Roberts Ready to Wear</h1>' +
      '<div id="bodyContent">' +
      "<p>Type of Business: Retail</p>" +
      "<p>Address: 1706 Martin Luther King Jr Blvd, Dallas, TX 75215</p>" +
      '<p><a href="">' +
      "Link to Business Website</a> " +
      "</p>" +
      "</div>" +
      "</div>"
    },
  
 
 {
      position: new google.maps.LatLng(33.080958,-96.825727),
      map: this.map,
      title: '<div id="content">' +
      '<div id="siteNotice">' +
      "</div>" +
      '<h1 id="firstHeading" class="firstHeading">Roots Chicken Shak</h1>' +
      '<div id="bodyContent">' +
      "<p>Type of Business: Restaurant</p>" +
      "<p>Address: 7800 Windrose Ave, Plano, TX 75024</p>" +
      '<p><a href="https://www.legacyfoodhall.com/">' +
      "Link to Business Website</a> " +
      "</p>" +
      "</div>" +
      "</div>"
    },
  
 
 {
      position: new google.maps.LatLng(32.709345,-96.803116),
      map: this.map,
      title: '<div id="content">' +
      '<div id="siteNotice">' +
      "</div>" +
      '<h1 id="firstHeading" class="firstHeading">Rudy’s Chicken</h1>' +
      '<div id="bodyContent">' +
      "<p>Type of Business: Restaurant</p>" +
      "<p>Address: 3115 S Lancaster Rd, Dallas, TX 75216</p>" +
      '<p><a href="">' +
      "Link to Business Website</a> " +
      "</p>" +
      "</div>" +
      "</div>"
    },
  
 
 {
      position: new google.maps.LatLng(32.756524,-96.823399),
      map: this.map,
      title: '<div id="content">' +
      '<div id="siteNotice">' +
      "</div>" +
      '<h1 id="firstHeading" class="firstHeading">Rush Patisserie</h1>' +
      '<div id="bodyContent">' +
      "<p>Type of Business: Bakery</p>" +
      "<p>Address: 1201 Eldorado Ave, Dallas, TX 75208</p>" +
      '<p><a href="https://rushpatisserie.com/">' +
      "Link to Business Website</a> " +
      "</p>" +
      "</div>" +
      "</div>"
    },
  
 
 {
      position: new google.maps.LatLng(32.742071,-97.382775),
      map: this.map,
      title: '<div id="content">' +
      '<div id="siteNotice">' +
      "</div>" +
      '<h1 id="firstHeading" class="firstHeading">Samsons Ethiopian Cuisine</h1>' +
      '<div id="bodyContent">' +
      "<p>Type of Business: Restaurant</p>" +
      "<p>Address: 4307 Camp Bowie Blvd, Fort Worth, TX 76107</p>" +
      '<p><a href="https://samsonsmarketbistro.site/">' +
      "Link to Business Website</a> " +
      "</p>" +
      "</div>" +
      "</div>"
    },
    
    {
      position: new google.maps.LatLng(32.663081,-96.875186),
      map: this.map,
      title: '<div id="content">' +
      '<div id="siteNotice">' +
      "</div>" +
      '<h1 id="firstHeading" class="firstHeading">Sankofa Kitchen</h1>' +
      '<div id="bodyContent">' +
      "<p>Type of Business: Restaurant</p>" +
      "<p>Address: 3333 W Camp Wisdom Rd #118, Dallas, TX 75237</p>" +
      '<p><a href="https://sankofakitchen.com">' +
      "Link to Business Website</a> " +
      "</p>" +
      "</div>" +
      "</div>"
    },
  
 
 {
      position: new google.maps.LatLng(32.770768,-97.098149),
      map: this.map,
      title: '<div id="content">' +
      '<div id="siteNotice">' +
      "</div>" +
      '<h1 id="firstHeading" class="firstHeading">Shalewa Fashion International</h1>' +
      '<div id="bodyContent">' +
      "<p>Type of Business: Retail</p>" +
      "<p>Address: 807 Washington Dr. Suite B, Arlington, Texas 76011</p>" +
      '<p><a href="">' +
      "Link to Business Website</a> " +
      "</p>" +
      "</div>" +
      "</div>"
    },
  
 
 {
      position: new google.maps.LatLng(32.58898,-96.851479),
      map: this.map,
      title: '<div id="content">' +
      '<div id="siteNotice">' +
      "</div>" +
      '<h1 id="firstHeading" class="firstHeading">Shells and Tails 2 Geaux</h1>' +
      '<div id="bodyContent">' +
      "<p>Type of Business: Food Truck</p>" +
      "<p>Address: 324 E Belt Line Rd, DeSoto, TX 75115</p>" +
      '<p><a href="https://www.shellsandtails2geaux.com/">' +
      "Link to Business Website</a> " +
      "</p>" +
      "</div>" +
      "</div>"
    },
  
 
 {
      position: new google.maps.LatLng(32.783984,-96.785903),
      map: this.map,
      title: '<div id="content">' +
      '<div id="siteNotice">' +
      "</div>" +
      '<h1 id="firstHeading" class="firstHeading">Shoals Sound & Service</h1>' +
      '<div id="bodyContent">' +
      "<p>Type of Business: Bar</p>" +
      "<p>Address: 2614 Elm St STE# 110, Dallas, TX 75226</p>" +
      '<p><a href="https://www.shoalsde.com">' +
      "Link to Business Website</a> " +
      "</p>" +
      "</div>" +
      "</div>"
    },
  
 
 {
      position: new google.maps.LatLng(32.851105,-97.212891),
      map: this.map,
      title: '<div id="content">' +
      '<div id="siteNotice">' +
      "</div>" +
      '<h1 id="firstHeading" class="firstHeading">Sinsational Cakes Bakery</h1>' +
      '<div id="bodyContent">' +
      "<p>Type of Business: Bakery</p>" +
      "<p>Address: 5750 Davis Blvd, North Richland Hills, TX 76180</p>" +
      '<p><a href="https://sinsationalcakes.webs.com/">' +
      "Link to Business Website</a> " +
      "</p>" +
      "</div>" +
      "</div>"
    },
  
 
 {
      position: new google.maps.LatLng(32.911313,-96.745044),
      map: this.map,
      title: '<div id="content">' +
      '<div id="siteNotice">' +
      "</div>" +
      '<h1 id="firstHeading" class="firstHeading">Smith Family Denistry</h1>' +
      '<div id="bodyContent">' +
      "<p>Type of Business: Services</p>" +
      "<p>Address: 11910 Greenville Ave #110, Dallas, TX 75243</p>" +
      '<p><a href="https://smithfamilydentistrypa.com">' +
      "Link to Business Website</a> " +
      "</p>" +
      "</div>" +
      "</div>"
    },
  
 
 {
      position: new google.maps.LatLng(32.670097,-96.823249),
      map: this.map,
      title: '<div id="content">' +
      '<div id="siteNotice">' +
      "</div>" +
      '<h1 id="firstHeading" class="firstHeading">Smokey Joe’s BBQ</h1>' +
      '<div id="bodyContent">' +
      "<p>Type of Business: Restaurant</p>" +
      "<p>Address: 6407 S R. L. Thornton Fwy, Dallas, TX 75232</p>" +
      '<p><a href="https://smokeyjoesbbqdallas.com">' +
      "Link to Business Website</a> " +
      "</p>" +
      "</div>" +
      "</div>"
    },
  
 
 {
      position: new google.maps.LatLng(32.821732,-96.854707),
      map: this.map,
      title: '<div id="content">' +
      '<div id="siteNotice">' +
      "</div>" +
      '<h1 id="firstHeading" class="firstHeading">Smokey John’s BBQ</h1>' +
      '<div id="bodyContent">' +
      "<p>Type of Business: Restaurant</p>" +
      "<p>Address: 1820 W Mockingbird Lane, Dallas, TX 75235</p>" +
      '<p><a href="https://www.smokeyjohns.com/">' +
      "Link to Business Website</a> " +
      "</p>" +
      "</div>" +
      "</div>"
    },
  
 
 {
      position: new google.maps.LatLng(32.786074,-96.856116),
      map: this.map,
      title: '<div id="content">' +
      '<div id="siteNotice">' +
      "</div>" +
      '<h1 id="firstHeading" class="firstHeading">Snappys Catfish</h1>' +
      '<div id="bodyContent">' +
      "<p>Type of Business: Restaurant</p>" +
      "<p>Address: 3534 N Hampton Rd Dallas, Texas 75212</p>" +
      '<p><a href="https://snappycatfish.com/">' +
      "Link to Business Website</a> " +
      "</p>" +
      "</div>" +
      "</div>"
    },
  
 
 {
      position: new google.maps.LatLng(32.783889,-96.782441),
      map: this.map,
      title: '<div id="content">' +
      '<div id="siteNotice">' +
      "</div>" +
      '<h1 id="firstHeading" class="firstHeading">Sneaker Politics</h1>' +
      '<div id="bodyContent">' +
      "<p>Type of Business: Retail</p>" +
      "<p>Address: 2822 Main St, Dallas, TX 75226</p>" +
      '<p><a href="https://sneakerpolitics.com">' +
      "Link to Business Website</a> " +
      "</p>" +
      "</div>" +
      "</div>"
    },
  
 
 {
      position: new google.maps.LatLng(32.663318,-96.871157),
      map: this.map,
      title: '<div id="content">' +
      '<div id="siteNotice">' +
      "</div>" +
      '<h1 id="firstHeading" class="firstHeading">South Dallas Café</h1>' +
      '<div id="bodyContent">' +
      "<p>Type of Business: Restaurant</p>" +
      "<p>Address: 7035 Marvin D Love Fwy, Dallas, TX 75237</p>" +
      '<p><a href="https://southdallascafe.com">' +
      "Link to Business Website</a> " +
      "</p>" +
      "</div>" +
      "</div>"
    },
  
 
 {
      position: new google.maps.LatLng(32.794147,-96.791353),
      map: this.map,
      title: '<div id="content">' +
      '<div id="siteNotice">' +
      "</div>" +
      '<h1 id="firstHeading" class="firstHeading">Southern Classic Daiquiri</h1>' +
      '<div id="bodyContent">' +
      "<p>Type of Business: Restaurant</p>" +
      "<p>Address: 3113 Ross Ave. Dallas TX 75204</p>" +
      '<p><a href="https://www.southernclassicdaiquirifactory.com/">' +
      "Link to Business Website</a> " +
      "</p>" +
      "</div>" +
      "</div>"
    },
  
 
 {
      position: new google.maps.LatLng(32.794147,-96.791353),
      map: this.map,
      title: '<div id="content">' +
      '<div id="siteNotice">' +
      "</div>" +
      '<h1 id="firstHeading" class="firstHeading">Southern Classic Daiquiri Factory</h1>' +
      '<div id="bodyContent">' +
      "<p>Type of Business: Restaurant</p>" +
      "<p>Address: 3113 Ross Ave, Dallas, TX, 75204</p>" +
      '<p><a href="https://southernclassicdaquirifactory">' +
      "Link to Business Website</a> " +
      "</p>" +
      "</div>" +
      "</div>"
    },
  
 
 {
      position: new google.maps.LatLng(32.775594,-96.767884),
      map: this.map,
      title: '<div id="content">' +
      '<div id="siteNotice">' +
      "</div>" +
      '<h1 id="firstHeading" class="firstHeading">Southside Steaks and Cakes</h1>' +
      '<div id="bodyContent">' +
      "<p>Type of Business: Restaurant</p>" +
      "<p>Address: 3125 Al Lipscomb WayDallas, TX 75215</p>" +
      '<p><a href="https://www.southsidesteaksandcakes.com/">' +
      "Link to Business Website</a> " +
      "</p>" +
      "</div>" +
      "</div>"
    },
  
 
 {
      position: new google.maps.LatLng(32.61371,-97.097744),
      map: this.map,
      title: '<div id="content">' +
      '<div id="siteNotice">' +
      "</div>" +
      '<h1 id="firstHeading" class="firstHeading">SS Lyfestyle Autosports LLC</h1>' +
      '<div id="bodyContent">' +
      "<p>Type of Business: Automotive</p>" +
      "<p>Address: 8115 Wesson Rd, Arlington, TX 76002</p>" +
      '<p><a href="https://lyfestyleautosports.net">' +
      "Link to Business Website</a> " +
      "</p>" +
      "</div>" +
      "</div>"
    },
  
 
 {
      position: new google.maps.LatLng(32.74407,-96.787007),
      map: this.map,
      title: '<div id="content">' +
      '<div id="siteNotice">' +
      "</div>" +
      '<h1 id="firstHeading" class="firstHeading">Stanley’s Catfish</h1>' +
      '<div id="bodyContent">' +
      "<p>Type of Business: Restaurant</p>" +
      "<p>Address: 3146 Cedar Crest Blvd, Dallas, TX 75203</p>" +
      '<p><a href="">' +
      "Link to Business Website</a> " +
      "</p>" +
      "</div>" +
      "</div>"
    },
  
 
 {
      position: new google.maps.LatLng(32.783641,-96.807492),
      map: this.map,
      title: '<div id="content">' +
      '<div id="siteNotice">' +
      "</div>" +
      '<h1 id="firstHeading" class="firstHeading">Status Nightclub</h1>' +
      '<div id="bodyContent">' +
      "<p>Type of Business: Bar/Nightclub</p>" +
      "<p>Address: 2019 N Lamar St, Dallas, TX 75202</p>" +
      '<p><a href="N/A">' +
      "Link to Business Website</a> " +
      "</p>" +
      "</div>" +
      "</div>"
    },
  
 
 {
      position: new google.maps.LatLng(32.609117,-97.142274),
      map: this.map,
      title: '<div id="content">' +
      '<div id="siteNotice">' +
      "</div>" +
      '<h1 id="firstHeading" class="firstHeading">Stevie D’s Cheesesteak</h1>' +
      '<div id="bodyContent">' +
      "<p>Type of Business: Restaurant</p>" +
      "<p>Address: 2840 HWY 157, Suite 116 Mansfield, Texas 76063</p>" +
      '<p><a href="https://www.steviedscheesesteak.com/">' +
      "Link to Business Website</a> " +
      "</p>" +
      "</div>" +
      "</div>"
    },
  
 
 {
      position: new google.maps.LatLng(32.713857,-97.27444),
      map: this.map,
      title: '<div id="content">' +
      '<div id="siteNotice">' +
      "</div>" +
      '<h1 id="firstHeading" class="firstHeading">Stormie Monday’s</h1>' +
      '<div id="bodyContent">' +
      "<p>Type of Business: Restaurant</p>" +
      "<p>Address: 3509 E Berry StFort Worth, TX 76105</p>" +
      '<p><a href="https://www.stormiemonday.com/">' +
      "Link to Business Website</a> " +
      "</p>" +
      "</div>" +
      "</div>"
    },
  
 
 {
      position: new google.maps.LatLng(32.693576,-96.772769),
      map: this.map,
      title: '<div id="content">' +
      '<div id="siteNotice">' +
      "</div>" +
      '<h1 id="firstHeading" class="firstHeading">Sweet Georgia Brown Home Cooking</h1>' +
      '<div id="bodyContent">' +
      "<p>Type of Business: Restaurant</p>" +
      "<p>Address: 2840 E Ledbetter Dr, Dallas, TX 75216</p>" +
      '<p><a href="">' +
      "Link to Business Website</a> " +
      "</p>" +
      "</div>" +
      "</div>"
    },
  
 
 {
      position: new google.maps.LatLng(32.59177,-96.878019),
      map: this.map,
      title: '<div id="content">' +
      '<div id="siteNotice">' +
      "</div>" +
      '<h1 id="firstHeading" class="firstHeading">Sweetsie Bakery & Café</h1>' +
      '<div id="bodyContent">' +
      "<p>Type of Business: Bakery</p>" +
      "<p>Address: 921 W Belt Line Rd suite 112, DeSoto, TX 75115</p>" +
      '<p><a href="https://sweetsie-bakery-cafe">' +
      "Link to Business Website</a> " +
      "</p>" +
      "</div>" +
      "</div>"
    },
  
 
 {
      position: new google.maps.LatLng(32.706364,-97.015807),
      map: this.map,
      title: '<div id="content">' +
      '<div id="siteNotice">' +
      "</div>" +
      '<h1 id="firstHeading" class="firstHeading">TargetCost Realty</h1>' +
      '<div id="bodyContent">' +
      "<p>Type of Business: Services</p>" +
      "<p>Address: 2634 S Carrier Pkwy # 107, Grand Prairie, TX 75052</p>" +
      '<p><a href="https://matrix.ntreis.net/Matrix/Public/Portal.aspx?L=1&k=3151132XCJC9&p=AE-2982053-820#1">' +
      "Link to Business Website</a> " +
      "</p>" +
      "</div>" +
      "</div>"
    },
  
 
 {
      position: new google.maps.LatLng(33.028667,-96.711986),
      map: this.map,
      title: '<div id="content">' +
      '<div id="siteNotice">' +
      "</div>" +
      '<h1 id="firstHeading" class="firstHeading">Tasty Chicken Texas-Plano</h1>' +
      '<div id="bodyContent">' +
      "<p>Type of Business: Restaurant</p>" +
      "<p>Address: 705 W. Park Blvd, Plano, TX, 75075</p>" +
      '<p><a href="https://tastyschicken.com">' +
      "Link to Business Website</a> " +
      "</p>" +
      "</div>" +
      "</div>"
    },
  
 
 {
      position: new google.maps.LatLng(33.028667,-96.711986),
      map: this.map,
      title: '<div id="content">' +
      '<div id="siteNotice">' +
      "</div>" +
      '<h1 id="firstHeading" class="firstHeading">Tasty’s Chicken</h1>' +
      '<div id="bodyContent">' +
      "<p>Type of Business: Restaurant</p>" +
      "<p>Address: 705 W. Park Blvd Plano, Texas 75075</p>" +
      '<p><a href="https://www.tastyschicken.com/?fbclid=IwAR1HnwHGOzH9y3TDwyuDhVOKb8-4q4qoja-JxEpDGllKfRh1kSf8aT0le7g">' +
      "Link to Business Website</a> " +
      "</p>" +
      "</div>" +
      "</div>"
    },
  
 
 {
      position: new google.maps.LatLng(32.706241,-96.800881),
      map: this.map,
      title: '<div id="content">' +
      '<div id="siteNotice">' +
      "</div>" +
      '<h1 id="firstHeading" class="firstHeading">TD’s BBQ</h1>' +
      '<div id="bodyContent">' +
      "<p>Type of Business: Restaurant</p>" +
      "<p>Address: 3403 S Lancaster Rd, Dallas, TX 75216</p>" +
      '<p><a href="">' +
      "Link to Business Website</a> " +
      "</p>" +
      "</div>" +
      "</div>"
    },
  
 
 {
      position: new google.maps.LatLng(33.107261,-96.734968),
      map: this.map,
      title: '<div id="content">' +
      '<div id="siteNotice">' +
      "</div>" +
      '<h1 id="firstHeading" class="firstHeading">The Bells Sweet Factory</h1>' +
      '<div id="bodyContent">' +
      "<p>Type of Business: Services</p>" +
      "<p>Address: 2201 Legacy DrPlano, TX 75025</p>" +
      '<p><a href="https://thebellssweetfactory.com/">' +
      "Link to Business Website</a> " +
      "</p>" +
      "</div>" +
      "</div>"
    },
  
 
 {
      position: new google.maps.LatLng(33.155562,-96.839381),
      map: this.map,
      title: '<div id="content">' +
      '<div id="siteNotice">' +
      "</div>" +
      '<h1 id="firstHeading" class="firstHeading">The Cookie Society</h1>' +
      '<div id="bodyContent">' +
      "<p>Type of Business: Bakery</p>" +
      "<p>Address: 9320 Dallas Pkwy Suite 160, Frisco, TX 75034</p>" +
      '<p><a href="https://cookiesociety.com">' +
      "Link to Business Website</a> " +
      "</p>" +
      "</div>" +
      "</div>"
    },
  
 
    {
      position: new google.maps.LatLng(32.991274,-96.941627),
      map: this.map,
      title: '<div id="content">' +
      '<div id="siteNotice">' +
      "</div>" +
      '<h1 id="firstHeading" class="firstHeading">The Daq Shoppe - Carrollton</h1>' +
      '<div id="bodyContent">' +
      "<p>Type of Business: Restaurant</p>" +
      "<p>Address: 1837 W Frankford Rd #122, Carrollton, TX 75007</p>" +
      '<p><a href="https://thedaiquirishoppe.com">' +
      "Link to Business Website</a> " +
      "</p>" +
      "</div>" +
      "</div>"
    },
  
 
 {
      position: new google.maps.LatLng(32.709788,-97.0127),
      map: this.map,
      title: '<div id="content">' +
      '<div id="siteNotice">' +
      "</div>" +
      '<h1 id="firstHeading" class="firstHeading">The Daq Shoppe - Grand Prairie</h1>' +
      '<div id="bodyContent">' +
      "<p>Type of Business: Restaurant</p>" +
      "<p>Address: 684 W Pioneer Pkwy #100, Grand Prairie, TX 75051</p>" +
      '<p><a href="https://thedaiquirishoppe.com">' +
      "Link to Business Website</a> " +
      "</p>" +
      "</div>" +
      "</div>"
    },
  
 
 {
      position: new google.maps.LatLng(32.746875,-97.215171),
      map: this.map,
      title: '<div id="content">' +
      '<div id="siteNotice">' +
      "</div>" +
      '<h1 id="firstHeading" class="firstHeading">The Dock Bookshop</h1>' +
      '<div id="bodyContent">' +
      "<p>Type of Business: Retail</p>" +
      "<p>Address: 6637 Meadowbrook Dr, Fort Worth, TX 76112</p>" +
      '<p><a href="https://www.thedockbookshop.com/">' +
      "Link to Business Website</a> " +
      "</p>" +
      "</div>" +
      "</div>"
    },
  
 
 {
      position: new google.maps.LatLng(32.834138,-96.997504),
      map: this.map,
      title: '<div id="content">' +
      '<div id="siteNotice">' +
      "</div>" +
      '<h1 id="firstHeading" class="firstHeading">The Emma Rose Room</h1>' +
      '<div id="bodyContent">' +
      "<p>Type of Business: Restaurant</p>" +
      "<p>Address: 3524 W Airport Fwy #216, Irving, TX 75062</p>" +
      '<p><a href="https://www.theemmaroseroom.com/">' +
      "Link to Business Website</a> " +
      "</p>" +
      "</div>" +
      "</div>"
    },
  
 
 {
      position: new google.maps.LatLng(32.984957,-96.843489),
      map: this.map,
      title: '<div id="content">' +
      '<div id="siteNotice">' +
      "</div>" +
      '<h1 id="firstHeading" class="firstHeading">The Island Spot - Carrollton</h1>' +
      '<div id="bodyContent">' +
      "<p>Type of Business: Restaurant</p>" +
      "<p>Address: 2661 Midway Rd Ste 105 Carrollton, Texas</p>" +
      '<p><a href="http://www.theislandspot.net">' +
      "Link to Business Website</a> " +
      "</p>" +
      "</div>" +
      "</div>"
    },
  
 
 {
      position: new google.maps.LatLng(32.743451,-96.826888),
      map: this.map,
      title: '<div id="content">' +
      '<div id="siteNotice">' +
      "</div>" +
      '<h1 id="firstHeading" class="firstHeading">The Island Spot - Dallas</h1>' +
      '<div id="bodyContent">' +
      "<p>Type of Business: Restaurant</p>" +
      "<p>Address: 309 W Jefferson Blvd, Dallas, TX 75208</p>" +
      '<p><a href="http://www.theislandspot.net">' +
      "Link to Business Website</a> " +
      "</p>" +
      "</div>" +
      "</div>"
    },
  
 
 {
      position: new google.maps.LatLng(32.802682,-96.800845),
      map: this.map,
      title: '<div id="content">' +
      '<div id="siteNotice">' +
      "</div>" +
      '<h1 id="firstHeading" class="firstHeading">The Law Offices of Sharita Blacknall, PLLC</h1>' +
      '<div id="bodyContent">' +
      "<p>Type of Business: Legal Services</p>" +
      "<p>Address: 3131 McKinney Ave, Suite 600, Dallas, TX 75202</p>" +
      '<p><a href="https://blacknallfirm.com">' +
      "Link to Business Website</a> " +
      "</p>" +
      "</div>" +
      "</div>"
    },
  
 
 {
      position: new google.maps.LatLng(32.912711,-96.747698),
      map: this.map,
      title: '<div id="content">' +
      '<div id="siteNotice">' +
      "</div>" +
      '<h1 id="firstHeading" class="firstHeading">The Puddin Shoppe</h1>' +
      '<div id="bodyContent">' +
      "<p>Type of Business: Services</p>" +
      "<p>Address: 9050 Markville Drive, Dallas, TX 75243</p>" +
      '<p><a href="">' +
      "Link to Business Website</a> " +
      "</p>" +
      "</div>" +
      "</div>"
    },
  
 
 {
      position: new google.maps.LatLng(32.815175,-96.778432),
      map: this.map,
      title: '<div id="content">' +
      '<div id="siteNotice">' +
      "</div>" +
      '<h1 id="firstHeading" class="firstHeading">The Tipsy Cupcake</h1>' +
      '<div id="bodyContent">' +
      "<p>Type of Business: Bakery</p>" +
      "<p>Address: 2400 N Henderson Ave, Dallas, TX 75206</p>" +
      '<p><a href="https://spark.adobe.com/page/JShdom7rx5rZx/">' +
      "Link to Business Website</a> " +
      "</p>" +
      "</div>" +
      "</div>"
    },
  
 
 {
      position: new google.maps.LatLng(32.652292,-96.926505),
      map: this.map,
      title: '<div id="content">' +
      '<div id="siteNotice">' +
      "</div>" +
      '<h1 id="firstHeading" class="firstHeading">Thibodeaux’s Cajun</h1>' +
      '<div id="bodyContent">' +
      "<p>Type of Business: Restaurant</p>" +
      "<p>Address: 107 N Cedar Ridge Dr #106, Duncanville, TX 75116</p>" +
      '<p><a href="https://thibodeauxscajuncookin.com">' +
      "Link to Business Website</a> " +
      "</p>" +
      "</div>" +
      "</div>"
    },
  
 
 {
      position: new google.maps.LatLng(32.652292,-96.926505),
      map: this.map,
      title: '<div id="content">' +
      '<div id="siteNotice">' +
      "</div>" +
      '<h1 id="firstHeading" class="firstHeading">Thibodeaux’s Cajun Cookin</h1>' +
      '<div id="bodyContent">' +
      "<p>Type of Business: Restaurant</p>" +
      "<p>Address: 107 N Cedar Ridge Dr, Ste 106 Duncanville, Texas 75116</p>" +
      '<p><a href="http://www.thibodeauxscajuncookin.com/">' +
      "Link to Business Website</a> " +
      "</p>" +
      "</div>" +
      "</div>"
    },
  
 
 {
      position: new google.maps.LatLng(32.815175,-96.778432),
      map: this.map,
      title: '<div id="content">' +
      '<div id="siteNotice">' +
      "</div>" +
      '<h1 id="firstHeading" class="firstHeading">Tipsy Cupcake Dallas</h1>' +
      '<div id="bodyContent">' +
      "<p>Type of Business: Bakery</p>" +
      "<p>Address: 2400 N Henderson ave , Dallas Tx 75206</p>" +
      '<p><a href="https://spark.adobe.com/page/JShdom7rx5rZx/">' +
      "Link to Business Website</a> " +
      "</p>" +
      "</div>" +
      "</div>"
    },
  
 
 {
      position: new google.maps.LatLng(32.678193,-97.124718),
      map: this.map,
      title: '<div id="content">' +
      '<div id="siteNotice">' +
      "</div>" +
      '<h1 id="firstHeading" class="firstHeading">TJs Catfish & Tenders</h1>' +
      '<div id="bodyContent">' +
      "<p>Type of Business: Restaurant</p>" +
      "<p>Address: 4261 W Green Oaks Blvd Ste 506 Arlington, Texas 76016</p>" +
      '<p><a href="https://www.tjscatfishandwings1.com/">' +
      "Link to Business Website</a> " +
      "</p>" +
      "</div>" +
      "</div>"
    },
  
 
 {
      position: new google.maps.LatLng(32.908102,-96.696076),
      map: this.map,
      title: '<div id="content">' +
      '<div id="siteNotice">' +
      "</div>" +
      '<h1 id="firstHeading" class="firstHeading">TLC Vegan Kitchen</h1>' +
      '<div id="bodyContent">' +
      "<p>Type of Business: Restaurant</p>" +
      "<p>Address: 520 Shepherd Dr #10, Garland, TX 75042</p>" +
      '<p><a href="https://www.tlcvegankitchen.com/">' +
      "Link to Business Website</a> " +
      "</p>" +
      "</div>" +
      "</div>"
    },
  
 
 {
      position: new google.maps.LatLng(32.786767,-96.796555),
      map: this.map,
      title: '<div id="content">' +
      '<div id="siteNotice">' +
      "</div>" +
      '<h1 id="firstHeading" class="firstHeading">Townhouse</h1>' +
      '<div id="bodyContent">' +
      "<p>Type of Business: Bar/Nightclub</p>" +
      "<p>Address: 723 N Pearl St, Dallas, TX 75201</p>" +
      '<p><a href="https://townhousedallas.com">' +
      "Link to Business Website</a> " +
      "</p>" +
      "</div>" +
      "</div>"
    },
  
    {
      position: new google.maps.LatLng(32.763135,-96.77517),
      map: this.map,
      title: '<div id="content">' +
      '<div id="siteNotice">' +
      "</div>" +
      '<h1 id="firstHeading" class="firstHeading">Truckers Cafe</h1>' +
      '<div id="bodyContent">' +
      "<p>Type of Business: Restaurant</p>" +
      "<p>Address: 1910 Martin Luther King Jr Blvd, Dallas, TX 75215</p>" +
      '<p><a href="">' +
      "Link to Business Website</a> " +
      "</p>" +
      "</div>" +
      "</div>"
    },
  
 
 {
      position: new google.maps.LatLng(32.765642,-96.793263),
      map: this.map,
      title: '<div id="content">' +
      '<div id="siteNotice">' +
      "</div>" +
      '<h1 id="firstHeading" class="firstHeading">Turkey Leg Paradise</h1>' +
      '<div id="bodyContent">' +
      "<p>Type of Business: Restaurant/Bar</p>" +
      "<p>Address: 1715 South Lamar Dallas, TX 75215</p>" +
      '<p><a href="https://turkeylegparadise.com/">' +
      "Link to Business Website</a> " +
      "</p>" +
      "</div>" +
      "</div>"
    },
  
 
 {
      position: new google.maps.LatLng(32.775305,-96.766889),
      map: this.map,
      title: '<div id="content">' +
      '<div id="siteNotice">' +
      "</div>" +
      '<h1 id="firstHeading" class="firstHeading">Undecided Cafe</h1>' +
      '<div id="bodyContent">' +
      "<p>Type of Business: Restaurant</p>" +
      "<p>Address: 3126 Al Lipscomb Way, Dallas, TX 75215</p>" +
      '<p><a href="">' +
      "Link to Business Website</a> " +
      "</p>" +
      "</div>" +
      "</div>"
    },
  
 
 {
      position: new google.maps.LatLng(32.86801,-96.931611),
      map: this.map,
      title: '<div id="content">' +
      '<div id="siteNotice">' +
      "</div>" +
      '<h1 id="firstHeading" class="firstHeading">Union Beauty Lab</h1>' +
      '<div id="bodyContent">' +
      "<p>Type of Business: Retail</p>" +
      "<p>Address: 851 Lake Carolyn Pkwy #110, Irving, TX 75039</p>" +
      '<p><a href="https://unionbeautylab.com/">' +
      "Link to Business Website</a> " +
      "</p>" +
      "</div>" +
      "</div>"
    },
  
 
 {
      position: new google.maps.LatLng(32.93455,-97.32362),
      map: this.map,
      title: '<div id="content">' +
      '<div id="siteNotice">' +
      "</div>" +
      '<h1 id="firstHeading" class="firstHeading">Unique & Natural</h1>' +
      '<div id="bodyContent">' +
      "<p>Type of Business: Retail</p>" +
      "<p>Address: 1954 Golden Heights Rd, Suite #404, Fort Worth 76177</p>" +
      '<p><a href="https://www.uniqueandnatural.com/">' +
      "Link to Business Website</a> " +
      "</p>" +
      "</div>" +
      "</div>"
    },
  
 
 {
      position: new google.maps.LatLng(32.77939,-96.828337),
      map: this.map,
      title: '<div id="content">' +
      '<div id="siteNotice">' +
      "</div>" +
      '<h1 id="firstHeading" class="firstHeading">V-Eats Modern Vegan</h1>' +
      '<div id="bodyContent">' +
      "<p>Type of Business: Restaurant</p>" +
      "<p>Address: 3011 Gulden Ln #102, Dallas, TX 75212</p>" +
      '<p><a href="https://www.v-eats.com/">' +
      "Link to Business Website</a> " +
      "</p>" +
      "</div>" +
      "</div>"
    },
  
 
 {
      position: new google.maps.LatLng(32.823755,-96.769953),
      map: this.map,
      title: '<div id="content">' +
      '<div id="siteNotice">' +
      "</div>" +
      '<h1 id="firstHeading" class="firstHeading">Val Cheesecake - Lower Greenville</h1>' +
      '<div id="bodyContent">' +
      "<p>Type of Business: Bakery</p>" +
      "<p>Address: 2820 Greenville Avenue, Dallas, TX, 75206</p>" +
      '<p><a href="https://valscheesecakes.com">' +
      "Link to Business Website</a> " +
      "</p>" +
      "</div>" +
      "</div>"
    },
  
 
 {
      position: new google.maps.LatLng(32.805363,-96.815048),
      map: this.map,
      title: '<div id="content">' +
      '<div id="siteNotice">' +
      "</div>" +
      '<h1 id="firstHeading" class="firstHeading">Val Cheesecake - Oak Lawn</h1>' +
      '<div id="bodyContent">' +
      "<p>Type of Business: Bakery</p>" +
      "<p>Address: 3906 Maple Ave, Dallas, TX, 75219</p>" +
      '<p><a href="https://valscheesecakes.com">' +
      "Link to Business Website</a> " +
      "</p>" +
      "</div>" +
      "</div>"
    },
    {
      position: new google.maps.LatLng(32.748741,-96.837236),
      map: this.map,
      title: '<div id="content">' +
      '<div id="siteNotice">' +
      "</div>" +
      '<h1 id="firstHeading" class="firstHeading">Vegan Food House</h1>' +
      '<div id="bodyContent">' +
      "<p>Type of Business: Restaurant</p>" +
      "<p>Address: 832 W 7th St, Dallas, TX 75208</p>" +
      '<p><a href="https://www.veganfoodhouse.com/">' +
      "Link to Business Website</a> " +
      "</p>" +
      "</div>" +
      "</div>"
    },
  
 
 {
      position: new google.maps.LatLng(32.950546,-96.839764),
      map: this.map,
      title: '<div id="content">' +
      '<div id="siteNotice">' +
      "</div>" +
      '<h1 id="firstHeading" class="firstHeading">Vinetti’s</h1>' +
      '<div id="bodyContent">' +
      "<p>Type of Business: Restaurant/Bar</p>" +
      "<p>Address: 14833 Midway Rd #105, Addison, TX 75001</p>" +
      '<p><a href="https://vinettis.com">' +
      "Link to Business Website</a> " +
      "</p>" +
      "</div>" +
      "</div>"
    },
  
 
 {
      position: new google.maps.LatLng(33.028417,-96.841631),
      map: this.map,
      title: '<div id="content">' +
      '<div id="siteNotice">' +
      "</div>" +
      '<h1 id="firstHeading" class="firstHeading">What’s Cluckin</h1>' +
      '<div id="bodyContent">' +
      "<p>Type of Business: Restaurant</p>" +
      "<p>Address: 6505 W Park Blvd Suite 336, Plano, TX 75093</p>" +
      '<p><a href="http://whatscluckin.com/">' +
      "Link to Business Website</a> " +
      "</p>" +
      "</div>" +
      "</div>"
    },
  
 
 {
      position: new google.maps.LatLng(32.778068,-96.846504),
      map: this.map,
      title: '<div id="content">' +
      '<div id="siteNotice">' +
      "</div>" +
      '<h1 id="firstHeading" class="firstHeading">Whiskers Catfish & Burgers</h1>' +
      '<div id="bodyContent">' +
      "<p>Type of Business: Restaurant</p>" +
      "<p>Address: 1702 Singleton Blvd, Dallas, TX 75212</p>" +
      '<p><a href="http://www.whiskersfishandburgers.com/">' +
      "Link to Business Website</a> " +
      "</p>" +
      "</div>" +
      "</div>"
    },
  
 
 {
      position: new google.maps.LatLng(32.603195,-96.785906),
      map: this.map,
      title: '<div id="content">' +
      '<div id="siteNotice">' +
      "</div>" +
      '<h1 id="firstHeading" class="firstHeading">Wing World</h1>' +
      '<div id="bodyContent">' +
      "<p>Type of Business: Restaurant</p>" +
      "<p>Address: 1450 W. Pleasant Run Rd, Lancaster, TX</p>" +
      '<p><a href="https://wingsworldfood.com/">' +
      "Link to Business Website</a> " +
      "</p>" +
      "</div>" +
      "</div>"
    },
  
 
 {
      position: new google.maps.LatLng(32.649168,-96.870277),
      map: this.map,
      title: '<div id="content">' +
      '<div id="siteNotice">' +
      "</div>" +
      '<h1 id="firstHeading" class="firstHeading">Wing World</h1>' +
      '<div id="bodyContent">' +
      "<p>Type of Business: Restaurant</p>" +
      "<p>Address: 3207 Kirnwood Dr, Dallas, TX</p>" +
      '<p><a href="https://wingsworldfood.com/">' +
      "Link to Business Website</a> " +
      "</p>" +
      "</div>" +
      "</div>"
    },
  
 
 {
      position: new google.maps.LatLng(32.764459,-96.773225),
      map: this.map,
      title: '<div id="content">' +
      '<div id="siteNotice">' +
      "</div>" +
      '<h1 id="firstHeading" class="firstHeading">Wing World</h1>' +
      '<div id="bodyContent">' +
      "<p>Type of Business: Restaurant</p>" +
      "<p>Address: 2310 Martin Luther King Blvd, Dallas, TX</p>" +
      '<p><a href="https://wingsworldfood.com/">' +
      "Link to Business Website</a> " +
      "</p>" +
      "</div>" +
      "</div>"
    },
  
 
 {
      position: new google.maps.LatLng(32.716263,-96.823218),
      map: this.map,
      title: '<div id="content">' +
      '<div id="siteNotice">' +
      "</div>" +
      '<h1 id="firstHeading" class="firstHeading">Wingfield Breakfast & Burger</h1>' +
      '<div id="bodyContent">' +
      "<p>Type of Business: Restaurant</p>" +
      "<p>Address: 2615 S Beckley Ave, Dallas, TX 75224</p>" +
      '<p><a href="N/A">' +
      "Link to Business Website</a> " +
      "</p>" +
      "</div>" +
      "</div>"
    },
  
 
 {
      position: new google.maps.LatLng(32.716263,-96.823218),
      map: this.map,
      title: '<div id="content">' +
      '<div id="siteNotice">' +
      "</div>" +
      '<h1 id="firstHeading" class="firstHeading">Wingfields Burgers</h1>' +
      '<div id="bodyContent">' +
      "<p>Type of Business: Restaurant</p>" +
      "<p>Address: 2615 S. Beckley Ave. Dallas, Texas 75224</p>" +
      '<p><a href="">' +
      "Link to Business Website</a> " +
      "</p>" +
      "</div>" +
      "</div>"
    },
  
 
 {
      position: new google.maps.LatLng(32.764459,-96.773225),
      map: this.map,
      title: '<div id="content">' +
      '<div id="siteNotice">' +
      "</div>" +
      '<h1 id="firstHeading" class="firstHeading">Wings World</h1>' +
      '<div id="bodyContent">' +
      "<p>Type of Business: Restaurant</p>" +
      "<p>Address: 2310 Martin Luther King BLVD Dallas, TX</p>" +
      '<p><a href="http://wingsworld.info/">' +
      "Link to Business Website</a> " +
      "</p>" +
      "</div>" +
      "</div>"
    },
  
 
 {
      position: new google.maps.LatLng(32.617835,-96.91777),
      map: this.map,
      title: '<div id="content">' +
      '<div id="siteNotice">' +
      "</div>" +
      '<h1 id="firstHeading" class="firstHeading">Winners BBQ - Cedar Hill</h1>' +
      '<div id="bodyContent">' +
      "<p>Type of Business: Restaurant</p>" +
      "<p>Address: 1435 US-67, Cedar Hill, TX 75104</p>" +
      '<p><a href="https://winnersbbq.com">' +
      "Link to Business Website</a> " +
      "</p>" +
      "</div>" +
      "</div>"
    },
  
 
 {
      position: new google.maps.LatLng(33.014233,-96.671247),
      map: this.map,
      title: '<div id="content">' +
      '<div id="siteNotice">' +
      "</div>" +
      '<h1 id="firstHeading" class="firstHeading">Winners BBQ - Plano</h1>' +
      '<div id="bodyContent">' +
      "<p>Type of Business: Restaurant</p>" +
      "<p>Address: 3200 14th St, Plano, TX 75074</p>" +
      '<p><a href="https://winnersbbq.com">' +
      "Link to Business Website</a> " +
      "</p>" +
      "</div>" +
      "</div>"
    },
  
 
 {
      position: new google.maps.LatLng(32.794147,-96.791353),
      map: this.map,
      title: '<div id="content">' +
      '<div id="siteNotice">' +
      "</div>" +
      '<h1 id="firstHeading" class="firstHeading">XOXO Dining Room</h1>' +
      '<div id="bodyContent">' +
      "<p>Type of Business: Restaurant</p>" +
      "<p>Address: 3121 Ross Ave, Dallas, TX 75225</p>" +
      '<p><a href="http://www.xoxodallas.com/">' +
      "Link to Business Website</a> " +
      "</p>" +
      "</div>" +
      "</div>"
    },
  
 
 {
      position: new google.maps.LatLng(32.698913,-97.014572),
      map: this.map,
      title: '<div id="content">' +
      '<div id="siteNotice">' +
      "</div>" +
      '<h1 id="firstHeading" class="firstHeading">Yemsade African Restaurant</h1>' +
      '<div id="bodyContent">' +
      "<p>Type of Business: Restaurant</p>" +
      "<p>Address: 3007 S Carrier Pkwy, Grand Prairie, TX 75052</p>" +
      '<p><a href="">' +
      "Link to Business Website</a> " +
      "</p>" +
      "</div>" +
      "</div>"
    },
    
  ];
    

  mapInitializer() {
    this.map = new google.maps.Map(this.gmap.nativeElement, 
    this.mapOptions);
    this.loadAllMarkers();
   }

  loadAllMarkers(): void {
    this.markers.forEach(markerInfo => {
      //Creating a new marker object
      const marker = new google.maps.Marker({
        ...markerInfo
      });

      //creating a new info window with markers info
      const infoWindow = new google.maps.InfoWindow({
        content: marker.getTitle()
      });

      //Add click event to open info window on marker
      marker.addListener("click", () => {
        infoWindow.open(marker.getMap(), marker);
      });

      //Adding marker to google map
      marker.setMap(this.map);
    });
  }

}
