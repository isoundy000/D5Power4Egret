//////////////////////////////////////////////////////////////////////////////////////
//
//  Copyright (c) 2014-2015, MicroGame Technology Inc.
//  All rights reserved.
//  Redistribution and use in source and binary forms, with or without
//  modification, are permitted provided that the following conditions are met:
//
//     * Redistributions of source code must retain the above copyright
//       notice, this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above copyright
//       notice, this list of conditions and the following disclaimer in the
//       documentation and/or other materials provided with the distribution.
//     * Neither the name of the Egret nor the
//       names of its contributors may be used to endorse or promote products
//       derived from this software without specific prior written permission.
//
//  THIS SOFTWARE IS PROVIDED BY EGRET AND CONTRIBUTORS "AS IS" AND ANY EXPRESS
//  OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES
//  OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
//  IN NO EVENT SHALL EGRET AND CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT,
//  INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
//  LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;LOSS OF USE, DATA,
//  OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
//  LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
//  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
//  EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
//
//////////////////////////////////////////////////////////////////////////////////////

module d5power {

	export class MissionNR{
		/**
		 * 系统保存的处理模式
		 */ 
		public static SAVE_KEY:number = 200;
		/**
		 * 需求与奖励分割线
		 */ 
		public static N_R_LINE:number = 100;
		
		/* !!! 以下内容为D5Rpg内部定义，非必要请不要修改，会影响较多代码 !!! */
		
		/**
		 * 杀死怪物
		 */ 
		public static N_MONSTER_KILLED:number = 0;
		/**
		 * 拥有物品（不扣除）
		 */ 
		public static N_ITEM_TACKED:number = 1;
		/**
		 * 拥有物品（扣除）
		 */ 
		public static N_ITEM_NEED:number = 2;
		/**
		 * 拥有任务
		 */ 
		public static N_MISSION:number = 3;
		/**
		 * 玩家属性
		 */ 
		public static N_PLAYER_PROP:number = 4;
		/**
		 * 与NPC对话
		 */ 
		public static N_TALK_NPC:number = 5;
		
		/**
		 * 需要技能
		 */ 
		public static N_SKILL_LV:number = 6;
		
		/**
		 * 需要主角皮肤
		 */ 
		public static N_SKIN:number = 7;
		
		/**
		 * 需要装备某类型道具
		 */ 
		//public static const N_EQU_TYPE:uint = 8;
		
		/**
		 * 需要装备某个特定道具
		 */ 
		public static N_EQU:number = 9;
		
		/**
		 * 需要学会技能
		 */ 
		public static N_SKILL:number = 10;
		
		/**
		 * 需要增益
		 */ 
		public static N_BUFF:number = 11;
		/**
		 *需要游戏币
		 */
		 public static N_MONEY:number = 12;
		/**
		 *需要标记
		 */
		public static N_MARK:number = 13;
		/**
		 *拥有游戏币
		 */
		public static N_MONEY_KEEP:number = 14;
		/**
		 * 奖励道具
		 */ 
		public static R_ITEM:number = 100;
		/**
		 * 奖励游戏币
		 */ 
		public static R_MONEY:number = 101;
		/**
		 * 奖励经验
		 */ 
		public static R_EXP:number = 102;
		/**
		 * 奖励任务
		 */ 
		public static R_MISSION:number = 103;

		/**
		 * 奖励属性
		 */
		public static R_PLAYER_PROP:number = 104;
		/**
		 * 获得技能
		 */
		public static R_SKILL:number = 105;
		
		/* !!! 以上内容为D5Rpg内部定义，非必要请不要修改，会影响较多代码 !!! */
		
		
		private static COSTOM_DEFINE:Array<any> = new Array<any>();
		
		public constructor(){
		}
		
		/**
		 * 增加用户处理配置
		 */ 
		public static addCostomDefine(data:Array<any>):string{
			if(data.length!=2){
				return '无效的配置数据';
			}
			
			if(parseInt(data[0])<=MissionNR.SAVE_KEY){
				return MissionNR.SAVE_KEY+'以内为D5Rpg保留条件ID';
			}
			
			MissionNR.COSTOM_DEFINE.push(data);
			return 'TRUE';
		}
		
		public static getChinese(id:number = 0):string{
			switch(id){
				case MissionNR.N_MONSTER_KILLED:
					return '杀死怪物';
					break;
				case MissionNR.N_ITEM_NEED:
					return '拥有道具（扣除）';
					break;
				case MissionNR.N_ITEM_TACKED:
					return '拥有道具（不扣除）';
					break;
				case MissionNR.N_MISSION:
					return '拥有任务';
					break;
				case MissionNR.N_PLAYER_PROP:
					return '玩家属性达到';
					break;
				case MissionNR.N_TALK_NPC:
					return '与NPC对话';
					break;
				case MissionNR.N_SKILL_LV:
					return '技能等级达到';
					break;
				case MissionNR.N_EQU:
					return '需要装备';
					break;
				case MissionNR.N_SKIN:
					return '需要皮肤';
					break;
				case MissionNR.N_SKILL:
					return '需要学会技能';
					break;
				case MissionNR.N_BUFF:
					return '需要BUFF状态';
					break;
				case MissionNR.R_ITEM:
					return '奖励道具';
					break;
				case MissionNR.R_MONEY:
					return '奖励游戏币';
					break;
				case MissionNR.R_EXP:
					return '奖励经验';
					break;
				case MissionNR.R_MISSION:
					return '奖励任务';
					break;
				default:
					var length:number = MissionNR.COSTOM_DEFINE.length;
					for(var i:number = 0;i < length;i++){
						var data:Array<any> = MissionNR.COSTOM_DEFINE[i];
						if(data[0]==id) return data[1];
					}
					break;
			}
			
			return 'NULL';
		}
	}
}