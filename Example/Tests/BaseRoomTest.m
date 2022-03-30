//
//  BaseRoomTest.m
//  Whiteboard_Tests
//
//  Created by xuyunshi on 2022/3/30.
//  Copyright © 2022 leavesster. All rights reserved.
//

#import "BaseRoomTest.h"

@implementation BaseRoomTest

- (void)setUp
{
    [super setUp];
    self.continueAfterFailure = NO;

    XCTestExpectation *exp = [self expectationWithDescription:NSStringFromSelector(_cmd)];

    __weak typeof(self)weakSelf = self;
    self.roomVC.roomBlock = ^(WhiteRoom *room, NSError *error) {
        typeof(weakSelf)self = weakSelf;
        weakSelf.room = room;
        XCTAssertEqual(weakSelf.roomVC.roomConfig.isWritable, room.isWritable, @"roomVC writable is :%d room writbale is :%d", weakSelf.roomVC.roomConfig.isWritable, room.isWritable);
        XCTAssertNotNil(room);
        [exp fulfill];
    };

    [self pushRoomVC];

    [self waitForExpectationsWithTimeout:kTimeout handler:^(NSError * _Nullable error) {
        if (error) {
            NSLog(@"%@", error);
        }
    }];
}

- (void)tearDown
{
    [self popToRoot];
}

#pragma mark - Prepare

- (void)pushRoomVC {
    //Webview 在视图栈中才能正确执行 js
    __unused UIView *view = [self.roomVC view];
    UINavigationController *nav = (UINavigationController *)[UIApplication sharedApplication].keyWindow.rootViewController;
    if ([nav isKindOfClass:[UINavigationController class]]) {
        [nav pushViewController:self.roomVC animated:YES];
    }
}

- (void)popToRoot {
    UINavigationController *nav = (UINavigationController *)[UIApplication sharedApplication].keyWindow.rootViewController;
   if ([nav isKindOfClass:[UINavigationController class]]) {
       [nav popToRootViewControllerAnimated:YES];
   }
}

- (WhiteRoomConfig *)roomConfig
{
    if (!_roomConfig) {
        NSDictionary *payload = @{@"avatar": @"https://white-pan.oss-cn-shanghai.aliyuncs.com/40/image/mask.jpg", @"userId": @1024};
        _roomConfig = [[WhiteRoomConfig alloc] initWithUUID:WhiteRoomUUID roomToken:WhiteRoomToken uid:@"1"];
    }
    return _roomConfig;
}

- (WhiteRoomViewController *)roomVC {
    if (!_roomVC) {
        _roomVC = [[WhiteRoomViewController alloc] init];
        _roomVC.sdkConfig.enableInterrupterAPI = YES;
        _roomVC.roomCallbackDelegate = self;
        _roomVC.commonDelegate = self;
        _roomVC.roomConfig = self.roomConfig;
    }
    return _roomVC;
}

@end
