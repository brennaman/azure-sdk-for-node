/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

/* jshint latedef:false */
/* jshint forin:false */
/* jshint noempty:false */

'use strict';

var msRestAzure = require('ms-rest-azure');

exports.BaseResource = msRestAzure.BaseResource;
exports.CloudError = msRestAzure.CloudError;
exports.SubResource = require('./subResource');
exports.BackendAddressPool = require('./backendAddressPool');
exports.InboundNatRule = require('./inboundNatRule');
exports.SecurityRule = require('./securityRule');
exports.NetworkInterfaceDnsSettings = require('./networkInterfaceDnsSettings');
exports.Resource = require('./resource');
exports.NetworkInterface = require('./networkInterface');
exports.NetworkSecurityGroup = require('./networkSecurityGroup');
exports.Route = require('./route');
exports.RouteTable = require('./routeTable');
exports.PublicIPAddressDnsSettings = require('./publicIPAddressDnsSettings');
exports.PublicIPAddress = require('./publicIPAddress');
exports.IPConfiguration = require('./iPConfiguration');
exports.ResourceNavigationLink = require('./resourceNavigationLink');
exports.Subnet = require('./subnet');
exports.NetworkInterfaceIPConfiguration = require('./networkInterfaceIPConfiguration');
exports.ApplicationGatewayBackendAddress = require('./applicationGatewayBackendAddress');
exports.ApplicationGatewayBackendAddressPool = require('./applicationGatewayBackendAddressPool');
exports.ApplicationGatewayBackendHttpSettings = require('./applicationGatewayBackendHttpSettings');
exports.ApplicationGatewayBackendHealthServer = require('./applicationGatewayBackendHealthServer');
exports.ApplicationGatewayBackendHealthHttpSettings = require('./applicationGatewayBackendHealthHttpSettings');
exports.ApplicationGatewayBackendHealthPool = require('./applicationGatewayBackendHealthPool');
exports.ApplicationGatewayBackendHealth = require('./applicationGatewayBackendHealth');
exports.ApplicationGatewaySku = require('./applicationGatewaySku');
exports.ApplicationGatewaySslPolicy = require('./applicationGatewaySslPolicy');
exports.ApplicationGatewayIPConfiguration = require('./applicationGatewayIPConfiguration');
exports.ApplicationGatewayAuthenticationCertificate = require('./applicationGatewayAuthenticationCertificate');
exports.ApplicationGatewaySslCertificate = require('./applicationGatewaySslCertificate');
exports.ApplicationGatewayFrontendIPConfiguration = require('./applicationGatewayFrontendIPConfiguration');
exports.ApplicationGatewayFrontendPort = require('./applicationGatewayFrontendPort');
exports.ApplicationGatewayHttpListener = require('./applicationGatewayHttpListener');
exports.ApplicationGatewayPathRule = require('./applicationGatewayPathRule');
exports.ApplicationGatewayProbe = require('./applicationGatewayProbe');
exports.ApplicationGatewayRequestRoutingRule = require('./applicationGatewayRequestRoutingRule');
exports.ApplicationGatewayUrlPathMap = require('./applicationGatewayUrlPathMap');
exports.ApplicationGatewayWebApplicationFirewallConfiguration = require('./applicationGatewayWebApplicationFirewallConfiguration');
exports.ApplicationGateway = require('./applicationGateway');
exports.ApplicationGatewayListResult = require('./applicationGatewayListResult');
exports.RouteTableListResult = require('./routeTableListResult');
exports.RouteListResult = require('./routeListResult');
exports.PublicIPAddressListResult = require('./publicIPAddressListResult');
exports.SecurityRuleListResult = require('./securityRuleListResult');
exports.NetworkSecurityGroupListResult = require('./networkSecurityGroupListResult');
exports.FrontendIPConfiguration = require('./frontendIPConfiguration');
exports.LoadBalancingRule = require('./loadBalancingRule');
exports.Probe = require('./probe');
exports.InboundNatPool = require('./inboundNatPool');
exports.OutboundNatRule = require('./outboundNatRule');
exports.LoadBalancer = require('./loadBalancer');
exports.LoadBalancerListResult = require('./loadBalancerListResult');
exports.VirtualNetworkPeering = require('./virtualNetworkPeering');
exports.SubnetListResult = require('./subnetListResult');
exports.VirtualNetworkPeeringListResult = require('./virtualNetworkPeeringListResult');
exports.AddressSpace = require('./addressSpace');
exports.DhcpOptions = require('./dhcpOptions');
exports.VirtualNetwork = require('./virtualNetwork');
exports.VirtualNetworkListResult = require('./virtualNetworkListResult');
exports.IPAddressAvailabilityResult = require('./iPAddressAvailabilityResult');
exports.NetworkInterfaceListResult = require('./networkInterfaceListResult');
exports.EffectiveNetworkSecurityGroupAssociation = require('./effectiveNetworkSecurityGroupAssociation');
exports.EffectiveNetworkSecurityRule = require('./effectiveNetworkSecurityRule');
exports.EffectiveNetworkSecurityGroup = require('./effectiveNetworkSecurityGroup');
exports.EffectiveNetworkSecurityGroupListResult = require('./effectiveNetworkSecurityGroupListResult');
exports.EffectiveRoute = require('./effectiveRoute');
exports.EffectiveRouteListResult = require('./effectiveRouteListResult');
exports.UsageName = require('./usageName');
exports.Usage = require('./usage');
exports.UsagesListResult = require('./usagesListResult');
exports.DnsNameAvailabilityResult = require('./dnsNameAvailabilityResult');
exports.VirtualNetworkGatewayIPConfiguration = require('./virtualNetworkGatewayIPConfiguration');
exports.VirtualNetworkGatewaySku = require('./virtualNetworkGatewaySku');
exports.VpnClientRootCertificate = require('./vpnClientRootCertificate');
exports.VpnClientRevokedCertificate = require('./vpnClientRevokedCertificate');
exports.VpnClientConfiguration = require('./vpnClientConfiguration');
exports.BgpSettings = require('./bgpSettings');
exports.BgpPeerStatus = require('./bgpPeerStatus');
exports.GatewayRoute = require('./gatewayRoute');
exports.VirtualNetworkGateway = require('./virtualNetworkGateway');
exports.VpnClientParameters = require('./vpnClientParameters');
exports.VirtualNetworkGatewayListResult = require('./virtualNetworkGatewayListResult');
exports.BgpPeerStatusListResult = require('./bgpPeerStatusListResult');
exports.GatewayRouteListResult = require('./gatewayRouteListResult');
exports.TunnelConnectionHealth = require('./tunnelConnectionHealth');
exports.LocalNetworkGateway = require('./localNetworkGateway');
exports.VirtualNetworkGatewayConnection = require('./virtualNetworkGatewayConnection');
exports.VirtualNetworkGatewayConnectionListResult = require('./virtualNetworkGatewayConnectionListResult');
exports.ConnectionResetSharedKey = require('./connectionResetSharedKey');
exports.ConnectionSharedKey = require('./connectionSharedKey');
exports.LocalNetworkGatewayListResult = require('./localNetworkGatewayListResult');
exports.NetworkWatcher = require('./networkWatcher');
exports.NetworkWatcherListResult = require('./networkWatcherListResult');
exports.TopologyParameters = require('./topologyParameters');
exports.TopologyAssociation = require('./topologyAssociation');
exports.TopologyResource = require('./topologyResource');
exports.Topology = require('./topology');
exports.VerificationIPFlowParameters = require('./verificationIPFlowParameters');
exports.VerificationIPFlowResult = require('./verificationIPFlowResult');
exports.NextHopParameters = require('./nextHopParameters');
exports.NextHopResult = require('./nextHopResult');
exports.SecurityGroupViewParameters = require('./securityGroupViewParameters');
exports.NetworkInterfaceAssociation = require('./networkInterfaceAssociation');
exports.SubnetAssociation = require('./subnetAssociation');
exports.SecurityRuleAssociations = require('./securityRuleAssociations');
exports.SecurityGroupNetworkInterface = require('./securityGroupNetworkInterface');
exports.SecurityGroupViewResult = require('./securityGroupViewResult');
exports.PacketCaptureStorageLocation = require('./packetCaptureStorageLocation');
exports.PacketCaptureFilter = require('./packetCaptureFilter');
exports.PacketCaptureParameters = require('./packetCaptureParameters');
exports.PacketCapture = require('./packetCapture');
exports.PacketCaptureResult = require('./packetCaptureResult');
exports.PacketCaptureListResult = require('./packetCaptureListResult');
exports.PacketCaptureQueryStatusResult = require('./packetCaptureQueryStatusResult');
exports.TroubleshootingParameters = require('./troubleshootingParameters');
exports.QueryTroubleshootingParameters = require('./queryTroubleshootingParameters');
exports.TroubleshootingRecommendedActions = require('./troubleshootingRecommendedActions');
exports.TroubleshootingDetails = require('./troubleshootingDetails');
exports.TroubleshootingResult = require('./troubleshootingResult');
exports.RetentionPolicyParameters = require('./retentionPolicyParameters');
exports.FlowLogStatusParameters = require('./flowLogStatusParameters');
exports.FlowLogInformation = require('./flowLogInformation');
exports.ExpressRouteCircuitAuthorization = require('./expressRouteCircuitAuthorization');
exports.AuthorizationListResult = require('./authorizationListResult');
exports.ExpressRouteCircuitPeeringConfig = require('./expressRouteCircuitPeeringConfig');
exports.ExpressRouteCircuitStats = require('./expressRouteCircuitStats');
exports.RouteFilterRule = require('./routeFilterRule');
exports.ExpressRouteCircuitPeering = require('./expressRouteCircuitPeering');
exports.RouteFilter = require('./routeFilter');
exports.ExpressRouteCircuitPeeringListResult = require('./expressRouteCircuitPeeringListResult');
exports.ExpressRouteCircuitSku = require('./expressRouteCircuitSku');
exports.ExpressRouteCircuitServiceProviderProperties = require('./expressRouteCircuitServiceProviderProperties');
exports.ExpressRouteCircuit = require('./expressRouteCircuit');
exports.ExpressRouteCircuitArpTable = require('./expressRouteCircuitArpTable');
exports.ExpressRouteCircuitsArpTableListResult = require('./expressRouteCircuitsArpTableListResult');
exports.ExpressRouteCircuitRoutesTable = require('./expressRouteCircuitRoutesTable');
exports.ExpressRouteCircuitsRoutesTableListResult = require('./expressRouteCircuitsRoutesTableListResult');
exports.ExpressRouteCircuitRoutesTableSummary = require('./expressRouteCircuitRoutesTableSummary');
exports.ExpressRouteCircuitsRoutesTableSummaryListResult = require('./expressRouteCircuitsRoutesTableSummaryListResult');
exports.ExpressRouteCircuitListResult = require('./expressRouteCircuitListResult');
exports.ExpressRouteServiceProviderBandwidthsOffered = require('./expressRouteServiceProviderBandwidthsOffered');
exports.ExpressRouteServiceProvider = require('./expressRouteServiceProvider');
exports.ExpressRouteServiceProviderListResult = require('./expressRouteServiceProviderListResult');
exports.PatchRouteFilterRule = require('./patchRouteFilterRule');
exports.PatchRouteFilter = require('./patchRouteFilter');
exports.RouteFilterListResult = require('./routeFilterListResult');
exports.RouteFilterRuleListResult = require('./routeFilterRuleListResult');
exports.BGPCommunity = require('./bGPCommunity');
exports.BgpServiceCommunity = require('./bgpServiceCommunity');
exports.BgpServiceCommunityListResult = require('./bgpServiceCommunityListResult');
exports.ErrorDetails = require('./errorDetails');
exports.ErrorModel = require('./errorModel');
exports.AzureAsyncOperationResult = require('./azureAsyncOperationResult');
exports.ApplicationGatewayListResult = require('./applicationGatewayListResult');
exports.RouteTableListResult = require('./routeTableListResult');
exports.RouteListResult = require('./routeListResult');
exports.PublicIPAddressListResult = require('./publicIPAddressListResult');
exports.NetworkSecurityGroupListResult = require('./networkSecurityGroupListResult');
exports.SecurityRuleListResult = require('./securityRuleListResult');
exports.LoadBalancerListResult = require('./loadBalancerListResult');
exports.VirtualNetworkListResult = require('./virtualNetworkListResult');
exports.SubnetListResult = require('./subnetListResult');
exports.VirtualNetworkPeeringListResult = require('./virtualNetworkPeeringListResult');
exports.NetworkInterfaceListResult = require('./networkInterfaceListResult');
exports.UsagesListResult = require('./usagesListResult');
exports.VirtualNetworkGatewayListResult = require('./virtualNetworkGatewayListResult');
exports.VirtualNetworkGatewayConnectionListResult = require('./virtualNetworkGatewayConnectionListResult');
exports.LocalNetworkGatewayListResult = require('./localNetworkGatewayListResult');
exports.NetworkWatcherListResult = require('./networkWatcherListResult');
exports.PacketCaptureListResult = require('./packetCaptureListResult');
exports.AuthorizationListResult = require('./authorizationListResult');
exports.ExpressRouteCircuitPeeringListResult = require('./expressRouteCircuitPeeringListResult');
exports.ExpressRouteCircuitListResult = require('./expressRouteCircuitListResult');
exports.ExpressRouteServiceProviderListResult = require('./expressRouteServiceProviderListResult');
exports.RouteFilterListResult = require('./routeFilterListResult');
exports.RouteFilterRuleListResult = require('./routeFilterRuleListResult');
exports.BgpServiceCommunityListResult = require('./bgpServiceCommunityListResult');
