---
title: "IPv6 on dedicated Hetzner server with pfSense"
description: "Setting up IPv6 on a dedicated hetzner server with virtual pfSense firewall."
date: 2023-01-21
tags: ["networking","pfsense","ipv6","hetzner"]
thumbnail: hetzner-ipv6-pfsense.png
---

## Intro
I recently was able to setup my ISP router at home with IPv6.
Therefore I thought I would like to make my "home/cloud" lab at Hetzner IPv6 ready.

## Default IPv6 from Hetzner
By default you will receive a /64 subnet from Hetzner allocated to your dedicated server.
In most cases that's enough, but if you have virtual machines running on your server you likely want to have multiple subnets for your network zones.

It's theoretically possible to just use the /64 subnet an split it up in smaller subnets like /96 for your different network zones.
But in that case you will break many IPv6 related features like SLAAC, ND, privacy extensions,... and it's bad practice. 
See: [RFC5375 Appendix B.1 ](https://www.rfc-editor.org/rfc/rfc5375#appendix-B.1)

## Ordering an additional /56 IPv6 Subnet from Hetzner
In my case I was able to order an additional subnet at a once-off cost.
Currently it's not possible to order the IPv6 subnet directly from the portal, so I had to order by mail based on this [article](https://docs.hetzner.com/general/others/ipv4-pricing/#additional-56-ipv6-net-dedicated-root-servers).

After receiving the IPv6 subnet, you have to assign the pfSense WAN Interface MAC address to the subnet in the Hetzner Robot.
It's the same procedure as for IPv4.
In my case I assigned both subnets to the pfSense, because i don't need IPv6 for my hypervisor.
![IPv6 assignment to mac](/images/hetzner-ipv6-mac-assignment.png)

## pfSense configuration
On the WAN interface I configured a static IP (AAAA:AAAA:AAAA:AAAA::1/128) from my /64 subnet for IPv6 connectivity of the firewall itself.
The link-local IP fe80::1 needs to be configured as default gateway, because Hetzner uses this IP on their side.
See: [Hetzner Docs](https://docs.hetzner.com/robot/dedicated-server/ip/additional-ip-adresses/#gateway)
![IPv6 WAN interface config](/images/hetzner-ipv6-wan-interface.png)

On the LAN interface you can now use IP addresses from your custom /56 subnet.
This means, that you can use the four hexadecimal digits (AAAA:BBBB:CCCC:DD**XX**::) for a total of **256 /64 subnets**.
![IPv6 WAN interface config](/images/hetzner-ipv6-lan-interface.png)

Don't forget to check if router advertisements (RAs) are enabled, so that your clients can use SLAAC to generate an IPv6 address.

Here you can also configure the DNS servers, that sould be listed in the router advertisements (RDNSS).
Older OS may not support RDNSS ([RFC 8106](https://www.rfc-editor.org/rfc/rfc8106)). 
If that is the case, a DHCPv6 server needs to be configured or the clients can use the IPv4 DNS server for resolution.

Here's an example using SLAAC with DNS servers from Cloudflare and Google:
![IPv6 LAN interface ra and rdnss](/images/hetzner-ipv6-lan-interface-ra.png)
