import {Injectable, OnModuleDestroy, OnModuleInit} from '@nestjs/common';
import {ConfigService} from "@nestjs/config";
import * as LaunchDarkly from '@launchdarkly/node-server-sdk';

@Injectable()
export class AppService implements OnModuleInit, OnModuleDestroy {
  private ldClient : LaunchDarkly.LDClient;
  constructor(private configService: ConfigService) {
  }
  async onModuleInit(){
    const sdk = this.configService.get<string>('LAUNCHDARKLY_SDK_KEY');
    this.ldClient = LaunchDarkly.init(sdk!);
    await this.ldClient.waitForInitialization()
    console.log('SDK successfully initialized!')
  }
  onModuleDestroy(): any {
    this.ldClient.close();
  }

  async getTime(): Promise<string> {
    const flagName = 'time_feature'
    // const context = {key:'custom_user'}
    const context = {key:'usa'}
    const isFeatureFlag =  await this.ldClient.variation(flagName, context ,false )
    if(isFeatureFlag){
      return 'Good Evening!🌙'
    }
    return 'Good Morning!☀️';
  }
}
