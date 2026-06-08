import type { INodeProperties } from 'n8n-workflow';

export const providerDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Provider"
					]
				}
			},
			"options": [
				{
					"name": "List All Gift Card Providers",
					"value": "List All Gift Card Providers",
					"action": "List All GiftCard Providers",
					"description": "Returns a collection of giftcard providers from a store.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/giftcardproviders"
						}
					}
				},
				{
					"name": "Delete Gift Card Providerby ID",
					"value": "Delete Gift Card Providerby ID",
					"action": "Delete GiftCard Provider by ID",
					"description": "Delete a giftcard provider from a store.",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/giftcardproviders/{{$parameter[\"giftCardProviderID\"]}}"
						}
					}
				},
				{
					"name": "Create Update Gift Card Providerby ID",
					"value": "Create Update Gift Card Providerby ID",
					"action": "Create/Update GiftCard Provider by ID",
					"description": "Create or update a giftcard provider from a store.",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/giftcardproviders/{{$parameter[\"giftCardProviderID\"]}}"
						}
					}
				},
				{
					"name": "Get Gift Card Providerby ID",
					"value": "Get Gift Card Providerby ID",
					"action": "Get GiftCard Provider by ID",
					"description": "Returns a giftcard provider from a store.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/giftcardproviders/{{$parameter[\"giftCardProviderId\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /giftcardproviders",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Provider"
					],
					"operation": [
						"List All Gift Card Providers"
					]
				}
			}
		},
		{
			"displayName": "Accept",
			"name": "Accept",
			"required": true,
			"description": "Media type(s) that is/are acceptable for the response. Default value for payment provider protocol is application/json.",
			"default": "application/json",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"Accept": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Provider"
					],
					"operation": [
						"List All Gift Card Providers"
					]
				}
			}
		},
		{
			"displayName": "Content Type",
			"name": "Content-Type",
			"required": true,
			"description": "The Media type of the body of the request. Default value for payment provider protocol is application/json.",
			"default": "application/json",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"Content-Type": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Provider"
					],
					"operation": [
						"List All Gift Card Providers"
					]
				}
			}
		},
		{
			"displayName": "REST Range",
			"name": "REST-Range",
			"description": "Pagination control. This query variable must follow the format _resources={from}-{to}_.",
			"default": "resources=0-49",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"REST-Range": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Provider"
					],
					"operation": [
						"List All Gift Card Providers"
					]
				}
			}
		},
		{
			"displayName": "X VTEX API App Key",
			"name": "X-VTEX-API-AppKey",
			"required": true,
			"description": "VTEX API AppKey",
			"default": "{{X-VTEX-API-AppKey}}",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"X-VTEX-API-AppKey": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Provider"
					],
					"operation": [
						"List All Gift Card Providers"
					]
				}
			}
		},
		{
			"displayName": "X VTEX API App Token",
			"name": "X-VTEX-API-AppToken",
			"required": true,
			"description": "VTEX API AppToken",
			"default": "{{X-VTEX-API-AppToken}}",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"X-VTEX-API-AppToken": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Provider"
					],
					"operation": [
						"List All Gift Card Providers"
					]
				}
			}
		},
		{
			"displayName": "DELETE /giftcardproviders/{giftCardProviderID}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Provider"
					],
					"operation": [
						"Delete Gift Card Providerby ID"
					]
				}
			}
		},
		{
			"displayName": "Accept",
			"name": "Accept",
			"required": true,
			"description": "Media type(s) that is/are acceptable for the response. Default value for payment provider protocol is application/json.",
			"default": "application/json",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"Accept": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Provider"
					],
					"operation": [
						"Delete Gift Card Providerby ID"
					]
				}
			}
		},
		{
			"displayName": "Content Type",
			"name": "Content-Type",
			"required": true,
			"description": "The Media type of the body of the request. Default value for payment provider protocol is application/json.",
			"default": "application/json",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"Content-Type": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Provider"
					],
					"operation": [
						"Delete Gift Card Providerby ID"
					]
				}
			}
		},
		{
			"displayName": "X VTEX API App Key",
			"name": "X-VTEX-API-AppKey",
			"required": true,
			"description": "VTEX API AppKey",
			"default": "{{X-VTEX-API-AppKey}}",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"X-VTEX-API-AppKey": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Provider"
					],
					"operation": [
						"Delete Gift Card Providerby ID"
					]
				}
			}
		},
		{
			"displayName": "X VTEX API App Token",
			"name": "X-VTEX-API-AppToken",
			"required": true,
			"description": "VTEX API AppToken",
			"default": "{{X-VTEX-API-AppToken}}",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"X-VTEX-API-AppToken": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Provider"
					],
					"operation": [
						"Delete Gift Card Providerby ID"
					]
				}
			}
		},
		{
			"displayName": "Gift Card Provider ID",
			"name": "giftCardProviderID",
			"required": true,
			"description": "Gift Card provider's ID.",
			"default": "insert identifier here",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Provider"
					],
					"operation": [
						"Delete Gift Card Providerby ID"
					]
				}
			}
		},
		{
			"displayName": "X VTEX API App Key (Header)",
			"name": "security_appkey",
			"type": "string",
			"default": "",
			"description": "API key for appKey (header: X-VTEX-API-AppKey)",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"X-VTEX-API-AppKey": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Provider"
					],
					"operation": [
						"Delete Gift Card Providerby ID"
					]
				}
			}
		},
		{
			"displayName": "X VTEX API App Token (Header)",
			"name": "security_apptoken",
			"type": "string",
			"default": "",
			"description": "API key for appToken (header: X-VTEX-API-AppToken)",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"X-VTEX-API-AppToken": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Provider"
					],
					"operation": [
						"Delete Gift Card Providerby ID"
					]
				}
			}
		},
		{
			"displayName": "PUT /giftcardproviders/{giftCardProviderID}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Provider"
					],
					"operation": [
						"Create Update Gift Card Providerby ID"
					]
				}
			}
		},
		{
			"displayName": "Accept",
			"name": "Accept",
			"required": true,
			"description": "Media type(s) that is/are acceptable for the response. Default value for payment provider protocol is application/json.",
			"default": "application/json",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"Accept": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Provider"
					],
					"operation": [
						"Create Update Gift Card Providerby ID"
					]
				}
			}
		},
		{
			"displayName": "Content Type",
			"name": "Content-Type",
			"required": true,
			"description": "The Media type of the body of the request. Default value for payment provider protocol is application/json",
			"default": "application/json",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"Content-Type": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Provider"
					],
					"operation": [
						"Create Update Gift Card Providerby ID"
					]
				}
			}
		},
		{
			"displayName": "X VTEX API App Key",
			"name": "X-VTEX-API-AppKey",
			"required": true,
			"description": "VTEX API AppKey",
			"default": "{{X-VTEX-API-AppKey}}",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"X-VTEX-API-AppKey": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Provider"
					],
					"operation": [
						"Create Update Gift Card Providerby ID"
					]
				}
			}
		},
		{
			"displayName": "X VTEX API App Token",
			"name": "X-VTEX-API-AppToken",
			"required": true,
			"description": "VTEX API AppToken",
			"default": "{{X-VTEX-API-AppToken}}",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"X-VTEX-API-AppToken": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Provider"
					],
					"operation": [
						"Create Update Gift Card Providerby ID"
					]
				}
			}
		},
		{
			"displayName": "Gift Card Provider ID",
			"name": "giftCardProviderID",
			"required": true,
			"description": "Gift Card provider's ID.",
			"default": "insert identifier here",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Provider"
					],
					"operation": [
						"Create Update Gift Card Providerby ID"
					]
				}
			}
		},
		{
			"displayName": "PUT /giftcardproviders/{giftCardProviderID}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Provider"
					],
					"operation": [
						"Create Update Gift Card Providerby ID"
					]
				}
			}
		},
		{
			"displayName": "X VTEX API App Key (Header)",
			"name": "security_appkey",
			"type": "string",
			"default": "",
			"description": "API key for appKey (header: X-VTEX-API-AppKey)",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"X-VTEX-API-AppKey": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Provider"
					],
					"operation": [
						"Create Update Gift Card Providerby ID"
					]
				}
			}
		},
		{
			"displayName": "X VTEX API App Token (Header)",
			"name": "security_apptoken",
			"type": "string",
			"default": "",
			"description": "API key for appToken (header: X-VTEX-API-AppToken)",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"X-VTEX-API-AppToken": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Provider"
					],
					"operation": [
						"Create Update Gift Card Providerby ID"
					]
				}
			}
		},
		{
			"displayName": "GET /giftcardproviders/{giftCardProviderId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Provider"
					],
					"operation": [
						"Get Gift Card Providerby ID"
					]
				}
			}
		},
		{
			"displayName": "Accept",
			"name": "Accept",
			"required": true,
			"description": "Media type(s) that is/are acceptable for the response. Default value for payment provider protocol is application/json.",
			"default": "application/json",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"Accept": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Provider"
					],
					"operation": [
						"Get Gift Card Providerby ID"
					]
				}
			}
		},
		{
			"displayName": "Content Type",
			"name": "Content-Type",
			"required": true,
			"description": "The Media type of the body of the request. Default value for payment provider protocol is application/json.",
			"default": "application/json",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"Content-Type": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Provider"
					],
					"operation": [
						"Get Gift Card Providerby ID"
					]
				}
			}
		},
		{
			"displayName": "X VTEX API App Key",
			"name": "X-VTEX-API-AppKey",
			"required": true,
			"description": "VTEX API AppKey",
			"default": "{{X-VTEX-API-AppKey}}",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"X-VTEX-API-AppKey": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Provider"
					],
					"operation": [
						"Get Gift Card Providerby ID"
					]
				}
			}
		},
		{
			"displayName": "X VTEX API App Token",
			"name": "X-VTEX-API-AppToken",
			"required": true,
			"description": "VTEX API AppToken",
			"default": "{{X-VTEX-API-AppToken}}",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"X-VTEX-API-AppToken": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Provider"
					],
					"operation": [
						"Get Gift Card Providerby ID"
					]
				}
			}
		},
		{
			"displayName": "Gift Card Provider Id",
			"name": "giftCardProviderId",
			"required": true,
			"description": "Gift Card provider's ID.",
			"default": "insert identifier here",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Provider"
					],
					"operation": [
						"Get Gift Card Providerby ID"
					]
				}
			}
		},
		{
			"displayName": "X VTEX API App Key (Header)",
			"name": "security_appkey",
			"type": "string",
			"default": "",
			"description": "API key for appKey (header: X-VTEX-API-AppKey)",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"X-VTEX-API-AppKey": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Provider"
					],
					"operation": [
						"Get Gift Card Providerby ID"
					]
				}
			}
		},
		{
			"displayName": "X VTEX API App Token (Header)",
			"name": "security_apptoken",
			"type": "string",
			"default": "",
			"description": "API key for appToken (header: X-VTEX-API-AppToken)",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"X-VTEX-API-AppToken": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Provider"
					],
					"operation": [
						"Get Gift Card Providerby ID"
					]
				}
			}
		},
];
