import { NodeConnectionTypes, type INodeType, type INodeTypeDescription } from 'n8n-workflow';
import { providerDescription } from './resources/provider';
import { transactionDescription } from './resources/transaction';

export class VtexGiftcardHubApi implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'vtex-giftcard-hub-api',
		name: 'N8nDevVtexGiftcardHubApi',
		icon: { light: 'file:./vtex-giftcard-hub-api.svg', dark: 'file:./vtex-giftcard-hub-api.dark.svg' },
		group: ['input'],
		version: 1,
		subtitle: '={{\$parameter["operation"] + ": " + \$parameter["resource"]}}',
		description: '>ℹ️ Check the new Payments onboarding guide. We created this guide to improve the onboarding experience for developers at VTEX. I..',
		defaults: { name: 'vtex-giftcard-hub-api' },
		usableAsTool: true,
		inputs: [NodeConnectionTypes.Main],
		outputs: [NodeConnectionTypes.Main],
		credentials: [
			{
				name: 'N8nDevVtexGiftcardHubApiApi',
				required: true,
			},
		],
		requestDefaults: {
			baseURL: '={{\$credentials.url}}',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
		},
		properties: [
		{
			"displayName": "Resource",
			"name": "resource",
			"type": "options",
			"noDataExpression": true,
			"options": [
				{
					"name": "Provider",
					"value": "Provider",
					"description": ""
				},
				{
					"name": "Transaction",
					"value": "Transaction",
					"description": ""
				}
			],
			"default": ""
		},
		...providerDescription,
		...transactionDescription
		],
	};
}
